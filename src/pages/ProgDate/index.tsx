import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../Components/PageHeader';
import styles from './styles';

function ProgDate(){
	const [activities, setActivities] = useState({});
	const eventDays = ["12/12/2020","13/12/2020","14/12/2020","15/12/2020"];
	const [visibleItem, setvisibleItem] = useState(0);
	const [visibleActivity, setVisibleActivity] = useState(0);
	const [currentActivity, setCurrentActivity] = useState({});

	const navigation = useNavigation();

	function handdleActivityDetails(act){
		if(act.DescricaoAtividade != 'INTERVALO' && act.DescricaoAtividade != 'ALMOÇO'){
			setCurrentActivity(act);
			navigation.navigate('ActivityDetails', {act});
		}
	}

	function handdleVisibleItem(index){
		if(visibleItem === index){
			setvisibleItem(null);
			setVisibleActivity(null);
		}else{
			setvisibleItem(index)
		}
	}

	function handdleVisibleActivity(act){
		if(act.DescricaoAtividade != 'INTERVALO' && act.DescricaoAtividade != 'ALMOÇO'){
			(visibleActivity === act ? setVisibleActivity(null) : setVisibleActivity(act))
		}
	}

	function loadData(){
		AsyncStorage.getItem('Activities').then(res => {
			if(res){ 
				const local = JSON.parse(res);

				const group = local.data.reduce((r, a) => {
					r[a.LocalAtividade] = [...r[a.LocalAtividade] || [], a];
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
					eventDays.map((day,index) => {
						return (

							<View style={styles.item} key={index}>
								<TouchableOpacity style={styles.itemOption} onPress={() => handdleVisibleItem(index)}>
									<Text style={styles.itemTitle}>{day}</Text>
									<Feather style={styles.itemIcon} name={(visibleItem === index ? ('minus'): ('plus'))}></Feather>
								</TouchableOpacity>
							
								{ visibleItem === index && (
								
									Object.keys(activities)
									.sort()
									.map((actLocal, idx) => {
										
										console.log(activities[actLocal].filter(a => a.DataInicioAtividade === day).length);
										console.log(activities[actLocal].filter(a => a.DataInicioAtividade === day));
										
										return (
											<View key={idx}>
												{activities[actLocal].filter(a => a.DataInicioAtividade === day).length > 0 && (
													<View style={styles.itemActivity}>
													<TouchableOpacity style={styles.itemActivityOption} onPress={() => handdleVisibleActivity(actLocal)}>
														<Text style={styles.itemActivityTitle}>{actLocal}</Text>
														<Feather style={styles.itemActivityIcon} name={(visibleActivity === actLocal ? ('minus'): ('plus'))}></Feather>
													</TouchableOpacity>
												
					
													{ visibleActivity === actLocal && (
														activities[actLocal]
														.sort((a,b) => a.iniOrder - b.iniOrder)
														.filter(a => a.DataInicioAtividade === day)
														.map((activity, idx) => {
															return (
																<TouchableOpacity style={styles.itemContent} key={idx} onPress={() => handdleActivityDetails(activity)}>
																	
																	<View style={styles.activityInfosSection}>
																		<View style={styles.activityInfos}>
																			<Feather style={styles.activityInfosIcon} name='clock'></Feather>
																			<Text style={styles.activityInfosText}>
																				{activity.HoraInicioAtividade} - {activity.HoraFimAtividade}
																			</Text>
																		</View>
																		<View style={styles.activityInfos}>
																			<Text style={[styles.activityInfosText, styles.activityInfosTitle]}>{activity.DescricaoAtividade}</Text>
																		</View>
																		{ (activity.DescricaoAtividade != 'ALMOÇO' && activity.DescricaoAtividade != 'INTERVALO') && (
																			<Feather style={[styles.activityInfosIcon, styles.activityInfosIconNext]} name={'chevrons-right'}></Feather>
																		)}
																	</View>
					
																</TouchableOpacity>
															)
														})
													)}
													</View>
												)}
											</View>
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

export default ProgDate;