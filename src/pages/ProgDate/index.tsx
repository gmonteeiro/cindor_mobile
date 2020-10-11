import React, { useState, useEffect } from 'react';
import { View, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import PageHeader from '../../Components/PageHeader';
import ActivityDetails from '../../Components/ActivityDetails';

import api from '../../services/api';
import styles from './styles';


function ProgDate(){
	const [activities, setActivities] = useState([]);
	const [loading, setLoading] = useState(false);
	//const eventDays = ["12/12/2020","13/12/2020","14/12/2020","15/12/2020"];
	const eventDays = ["27/12/1899","28/12/1899","29/12/1899","30/12/1899"];
	const [visibleItem, setvisibleItem] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [currentActivity, setcurrentActivity] = useState({});

	const navigation = useNavigation();

	function handdleActivityDetails(act){
		setcurrentActivity(act);
		setModalVisible(true);
	}

	function handdleVisibleItem(index){
		(visibleItem === index ? setvisibleItem(null) : setvisibleItem(index))
	}

	async function loadActivities(){
		if(loading){
			return;
		}

		setLoading(true);

		const response = await api.get('/GetAtividades?codEve=3',{});
		console.log(response.data);

		const data = response.data.map( a => ({...a,
			iniOrder: 
				a.HoraInicioAtividade.substring(0,10)
				.concat(a.HoraInicioAtividade.substring(11,16))
				.concat(a.OrdemPalestra)
				.replace(/:|-/g, ""),
			DataAtividade: a.HoraInicioAtividade.substring(8,10).concat("/")
				.concat(a.HoraInicioAtividade.substring(5,7)).concat("/")
				.concat(a.HoraInicioAtividade.substring(0,4)),
			HoraInicioAtividade: a.HoraInicioAtividade.substring(11,16),
			DataInicioAtividade: a.HoraInicioAtividade.substring(8,10).concat("/")
				.concat(a.HoraInicioAtividade.substring(5,7)).concat("/")
				.concat(a.HoraInicioAtividade.substring(0,4)),
			DataFimAtividade: a.HoraFimAtividade.substring(8,10).concat("/")
				.concat(a.HoraFimAtividade.substring(5,7)).concat("/")
				.concat(a.HoraFimAtividade.substring(0,4)),
			HoraFimAtividade: a.HoraFimAtividade.substring(11,16)
		}));

		console.log(data);

		setActivities(data);

		setLoading(false);
	}

	useEffect(() => {
		loadActivities();
	}, []);

	return(
		<View style={styles.container}>
			<PageHeader title="Programação Científica data"/>

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
									activities.filter(act => act.DataAtividade === day)
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

							<ActivityDetails id={currentActivity.AtividadeId}/>
							
						</View>
					</View>
				</Modal>
			

		</View>
	)
	
}

export default ProgDate;