import React, { useState, useEffect } from 'react';
import { View, Text, Modal, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../Components/PageHeader';

//import EventDetails from '../../Components/EventDetails';

import api from '../../services/api';
import styles from './styles';

function ProgDate(){
	const [activities, setActivities] = useState([]);
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);
	const eventDays = ["12/12/2020","13/12/2020","14/12/2020","15/12/2020"];
	const [visibleItem, setvisibleItem] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [currentActivity, setcurrentActivity] = useState({});

	const navigation = useNavigation();

	function handdleActivityDetails(act){
		setcurrentActivity(act);
		//setModalVisible(true);
		navigation.navigate('ActivityDetails', {'activityId': act.AtividadeId});
	}

	function handdleVisibleItem(index){
		(visibleItem === index ? setvisibleItem(null) : setvisibleItem(index))
	}

	async function getFromApi(endPoint){
		const res = await api.get(endPoint,{});

		const data = res.data.map( a => ({...a,
			iniOrder: 
				a.DataInicioAtividade.substring(0,10)
				.concat(a.HoraInicioAtividade.substring(11,16))
				.concat(a.OrdemPalestra)
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
			<PageHeader title="Programação Científica data" destination="goBack"/>

			<ScrollView style={styles.content}>
				{
					eventDays.map((day,index) => {
						return (
							<View style={styles.item} key={index}>
								<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem(index)}>
									<Text style={styles.itemIndex}>{index+1}</Text>
									<Text style={styles.itemTitle}>{day}</Text>
									<Feather style={styles.itemIcon} name={(visibleItem === index ? ('minus'): ('plus'))}></Feather>
								</TouchableOpacity>

								{ visibleItem === index && (
									activities.filter(act => act.DataInicioAtividade === day)
									.sort((a,b) => a.iniOrder - b.iniOrder)
									.map((activity, idx) => {
										return (
											<TouchableOpacity style={styles.itemContent} key={idx} onPress={() => handdleActivityDetails(activity)}>
												<Text style={styles.itemPeriod}>{activity.HoraInicioAtividade} - {activity.HoraFimAtividade}</Text>
												<Text style={styles.itemDescription}>{activity.DescricaoAtividade}</Text>
											</TouchableOpacity>
										)
									})
								)}
							</View>
						)
					})
				}				
			</ScrollView>

			
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>

							<TouchableOpacity style={styles.modalCloseButton} onPress={() => { setModalVisible(false) }} >
								<Feather name="x" color='red' size={22}></Feather>
							</TouchableOpacity>

							{/* <EventDetails id={currentActivity.AtividadeId}/> */}
							
						</View>
					</View>
				</Modal>
		</View>
	)
	
}

export default ProgDate;