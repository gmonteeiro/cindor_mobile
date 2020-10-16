import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../Components/PageHeader';
import api from '../../services/api';
import styles from './styles';

function ProgTheme(){
	const [visibleItem, setvisibleItem] = useState(0);
	const [activities, setActivities] = useState({});
	const [currentActivity, setCurrentActivity] = useState({});

	const navigation = useNavigation();

	function handdleActivityDetails(act){
		setCurrentActivity(act);
		navigation.navigate('ActivityDetails', {act});
	}	

	function handdleVisibleItem(act){
		(visibleItem === act ? setvisibleItem(null) : setvisibleItem(act))
	}

	function loadData(){
		AsyncStorage.getItem('Activities').then(res => {
			
			if(res){ 
				const local = JSON.parse(res);

				const group = local.data.reduce((r, a) => {
					r[a.DescricaoAtividade] = [...r[a.DescricaoAtividade] || [], a];
					return r;
				}, {});

				setActivities(group);
			}else{ // if we dont have local data
				console.log("empty");
			}
		})
	}

	useEffect(() => {
		loadData();
	}, []);

	return(
		<View style={styles.container}>
			<PageHeader title="Programação Científica" destination="menu"/>

			<ScrollView style={styles.content}>
				{
					Object.keys(activities)
					.sort()
					.filter(a => (a != "INTERVALO" && a !=  "ALMOÇO"))
					.map((activityName, index) => {

						return (
							<View style={styles.item} key={index}>
								<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem(activityName)}>
									<Text style={styles.itemTitle}>{activityName}</Text>
									<Feather style={styles.itemIcon} name={(visibleItem === activityName ? ('minus'): ('plus'))}></Feather>
								</TouchableOpacity>

								{ visibleItem === activityName && (
									activities[activityName]
									.sort((a,b) => a.iniOrder - b.iniOrder)
									.filter(a => (a.DescricaoAtividade != "INTERVALO" && a.DescricaoAtividade !=  "ALMOÇO"))
									.map((activity, idx) => {
										return (
											<TouchableOpacity style={styles.itemContent} key={idx} onPress={() => handdleActivityDetails(activity)}>
												
												<View style={styles.activityInfosSection}>
													<View style={styles.activityInfos}>
														<Feather style={styles.activityInfosIcon} name='calendar'></Feather>
														<Text style={styles.activityInfosText}> {activity.DiaMesInicioAtividade} </Text>
														
														<Feather style={styles.activityInfosIcon} name='clock'></Feather>
														<Text style={styles.activityInfosText}>
															{activity.HoraInicioAtividade} - {activity.HoraFimAtividade}
														</Text>
													</View>
													<View style={styles.activityInfos}>
														<Feather style={styles.activityInfosIcon} name='map-pin'></Feather>
														<Text style={styles.activityInfosText}>{activity.LocalAtividade}</Text>
													</View>
												</View>

											</TouchableOpacity>
										)
									})
								)}
							</View>
						)
					})
				}
				<View style={styles.item} ></View>
			</ScrollView>
			
		</View>
	)
	
}

export default ProgTheme;