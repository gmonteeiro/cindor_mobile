import React, { useState, useEffect } from 'react';
import { 
	View, ScrollView, Text, Image,
	TouchableOpacity, StatusBar, AsyncStorage, Modal
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import PageHeader from '../../Components/PageHeader';
import EventDetails from '../../Components/EventDetails';

import styles from './styles';
import noImage from '../../assets/no-image.png';


export default function ActivityDetails(){
	StatusBar.setBarStyle('light-content', true);

	const [modalVisible, setModalVisible] = useState(false);
	const [activity, setActivity] = useState([]);
	const speakerTypes = ["PALESTRANTE", "EQUIPE DE PROFESSORES", "DEBATEDOR"];
	const [currentEvent, setCurrentEvent] = useState({});

	console.log('details');
	const route = useRoute();
	const act = (route.params ? route.params.act : {});
	

	function handdleEventDetails(event){
		console.log(event);
		setCurrentEvent(event);
		setModalVisible(true);
	}

	console.log(act);

	function loadData(){
		AsyncStorage.getItem('Events').then(res => {

			let data = JSON.parse(res).data;
			
			data = data.filter(a => a.AtividadeId === act.AtividadeId)
			.sort((a,b) => a.iniOrder - b.iniOrder)

			console.log(data);
			setActivity(data);
		})
	}

	useEffect(() => {
		loadData();
	}, [act]);
	
	return(
			<View style={styles.container}>
				
				<PageHeader title={act.DescricaoAtividade} destination="goBack"/>
				
				<View style={styles.activityInfosSection}>
					<View style={styles.activityInfos}>
						<Feather style={styles.activityInfosIcon} name='calendar'></Feather>
						<Text style={styles.activityInfosText}> {act.DiaMesInicioAtividade} </Text>
						
						<Feather style={styles.activityInfosIcon} name='clock'></Feather>
						<Text style={styles.activityInfosText}>
							{act.HoraInicioAtividade} - {act.HoraFimAtividade}
						</Text>
					</View>
					<View style={styles.activityInfos}>
						<Feather style={styles.activityInfosIcon} name='map-pin'></Feather>
						<Text style={styles.activityInfosText}>{act.LocalAtividade}</Text>
					</View>
				</View>

				<ScrollView style={styles.content}>
					{
						activity.map((event, idx) => {

							const type = ( speakerTypes.includes(event.CategoriaPalestra) ? ( "event" ) : ("activity"));
							console.log(event);

							return (
								<View style={styles.eventsContent} key={idx}>

									{ type === 'activity' ? (
										<TouchableOpacity style={styles.activitySpeakerSection} onPress={() => handdleEventDetails(event)}>
												
											{( event.PalestranteImgUrl == "noImage" ? 
												( <Image style={styles.activitySpeakerImage} source={ noImage }/> ) :
												( <Image style={styles.activitySpeakerImage} source={ {uri: event.PalestranteImgUrl} }/> )
											)}

											<View style={styles.activitySpeakerInfos}>
												<Text style={styles.activitySpeakerName}> {event.PalestranteNome} </Text>
												<Text style={styles.activitySpeakerRule}> {event.CategoriaPalestra} </Text>
											</View>
											
										</TouchableOpacity>
									) : (
										<TouchableOpacity style={styles.activityEventSection} onPress={() => handdleEventDetails(event)}>
											
											<View style={styles.activityEventTime}>
												<View style={styles.activityEventDot}></View>
												<Text style={styles.itemPeriod}>{event.HoraInicioPalestra} - {event.HoraFimPalestra}</Text>
											</View>

											<Text style={styles.itemDescription}>{event.TemaPalestra}</Text>
											
											<View style={styles.activitySpeakerEventSection}>
												{( event.PalestranteImgUrl == "noImage" ? 
													( <Image style={styles.activitySpeakerImage} source={ noImage }/> ) :
													( <Image style={styles.activitySpeakerImage} source={ {uri: event.PalestranteImgUrl} }/> )
												)}

												<View style={styles.activitySpeakerInfos}>
													<Text style={styles.activitySpeakerName}> {event.PalestranteNome} </Text>
													<Text style={styles.activitySpeakerRule}> {event.CategoriaPalestra} </Text>
												</View>
											</View>
											
										</TouchableOpacity>
									)}
								</View>
							)
						})
					}
				<View style={styles.eventsContent} ></View>
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
							
							<EventDetails event={currentEvent}/>

						</View>
					</View>
				</Modal>
				
			</View>
		
	)
}