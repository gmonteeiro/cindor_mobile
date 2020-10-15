import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../Components/PageHeader';
import api from '../../services/api';
import styles from './styles';

function ProgDate(){
	const [activities, setActivities] = useState([]);
	const [events, setEvents] = useState([]);
	const [currentActivity, setCurrentActivity] = useState({});

	const navigation = useNavigation();

	function handdleActivityDetails(act){
		setCurrentActivity(act);
		navigation.navigate('ActivityDetails', {act});
	}

	async function getFromApi(endPoint){
		const res = await api.get(endPoint,{});

		const data = res.data.map( a => ({...a,
			iniOrder: 
				a.DataInicioAtividade.substring(0,10)
				.concat(a.HoraInicioAtividade.substring(11,16))
				.concat((a.OrdemPalestra == null ? '' : a.OrdemPalestra))
				.replace(/:|-/g, ""),
			HoraInicioAtividade: a.HoraInicioAtividade.substring(11,16),
			DataInicioAtividade: a.DataInicioAtividade.substring(8,10).concat("/")
				.concat(a.DataInicioAtividade.substring(5,7)).concat("/")
				.concat(a.DataInicioAtividade.substring(0,4)),
			HoraInicioPalestra: (a.HoraInicioPalestra == null ? ('') : (a.HoraInicioPalestra.substring(11,16))),
			DiaMesInicioAtividade: a.DataInicioAtividade.substring(8,10).concat("/")
				.concat(a.DataInicioAtividade.substring(5,7)),
			DataFimAtividade: a.DataFimAtividade.substring(8,10).concat("/")
				.concat(a.DataFimAtividade.substring(5,7)).concat("/")
				.concat(a.DataFimAtividade.substring(0,4)),
			HoraFimAtividade: a.HoraFimAtividade.substring(11,16),
			HoraFimPalestra: (a.HoraFimPalestra == null ? ('') : (a.HoraFimPalestra.substring(11,16))),
			PalestranteImgUrl: (a.PalestranteImgUrl == null ? ("noImage") : a.PalestranteImgUrl)
		}));

		return data;
	}

	function loadData(type){
		AsyncStorage.getItem(type).then(res => {
			const uri = (type === 'Activities' ? ('/GetAtividades?codEve=3') : ('?codEve=3'));
			
			if(res){ // if has local data
				const localData = JSON.parse(res);
				const dateDiff = (new Date - new Date(localData.datUpdate))/1000/60;
				
				if(dateDiff > 30){ // if local data is not recent we will call the api

					getFromApi(uri).then(apiResponse => {
						(type === 'Activities' ? (setActivities(apiResponse)) : (setEvents(apiResponse)));
						AsyncStorage.setItem(type, JSON.stringify({ "datUpdate": new Date(),"data": apiResponse }));
					});

				}else{ // if local data is recent (30 min or earlier)
					(type === 'Activities' ? (setActivities(localData.data)) : (setEvents(localData.data)));
				}
			}else{ // if we dont have local data
				getFromApi(uri).then(apiResponse => {
					(type === 'Activities' ? (setActivities(apiResponse)) : (setEvents(apiResponse)));
					AsyncStorage.setItem(type, JSON.stringify({ "datUpdate": new Date(),"data": apiResponse }));
				});
			}
		})
	}

	useEffect(() => {
		const clearAppData = async function() {
			try {
				const keys = await AsyncStorage.getAllKeys();
				await AsyncStorage.multiRemove(keys);
			} catch (error) {
				console.error('Error clearing app data.');
			}
		}

		// clearAppData();
		loadData('Activities');
		loadData('Events');
	}, []);

	return(
		<View style={styles.container}>
			<PageHeader title="Programação Científica" destination="menu"/>

			<ScrollView style={styles.content}>
				{
					activities
					.sort((a,b) => a.iniOrder - b.iniOrder)
					.map((activity, idx) => {
						return (
							<TouchableOpacity style={styles.itemContent} key={idx} onPress={() => handdleActivityDetails(activity)}>
								<Text style={styles.itemPeriod}>
									{activity.DiaMesInicioAtividade} das {activity.HoraInicioAtividade} as {activity.HoraFimAtividade}</Text>
								<Text style={styles.itemDescription}>{activity.DescricaoAtividade}</Text>
							</TouchableOpacity>
						)
					})
				}
				<View style={styles.item} ></View>
			</ScrollView>
			
		</View>
	)
	
}

export default ProgDate;