import React, { useState, useEffect } from 'react';
import { 
	View, ScrollView, Text, Image,
	TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import PageHeader from '../../Components/PageHeader';
import styles from './styles';
import noImage from '../../assets/no-image.png';

export default function ActivityDetails(){
	StatusBar.setBarStyle('light-content', true);

	const [activity, setActivity] = useState([{
		"AtividadeId": null,
		"CategoriaAtividade": null,
		"CategoriaPalestra": null,
		"DataFimAtividade": null,
		"DataInicioAtividade": null,
		"DataPalestra": null,
		"DescricaoAtividade": null,
		"HoraFimAtividade": null,
		"HoraFimPalestra": null,
		"HoraInicioAtividade": null,
		"HoraInicioPalestra": null,
		"LocalAtividade": null,
		"Minicurriculo": null,
		"ObsAtividade": null,
		"ObsPalestra": null,
		"ObsParticipante": null,
		"OrdemPalestra": null,
		"PalestraId": null,
		"PalestranteId": null,
		"PalestranteImgUrl": "noImage",
		"PalestranteNome": null,
		"PossuiTraducaoSimultanea": null,
		"SubtemaPalestra": null,
		"TemaPalestra": null,
		"iniOrder": null
	}]);
	const speakerTypes = ["PALESTRANTE", "EQUIPE DE PROFESSORES", "DEBATEDOR"];

	const route = useRoute();
	const id = route.params.activityId;
	
	console.log(id);

	function loadData(){
		AsyncStorage.getItem('Events').then(res => {

			let data = JSON.parse(res).data;
			
			data = data.filter(a => a.AtividadeId === id)
			.sort((a,b) => a.iniOrder - b.iniOrder)

			console.log(data);
			setActivity(data);
		})
	}

	useEffect(() => {
		loadData();
	}, []);
	
	return(
			<View style={styles.container}>
				
				<PageHeader title={activity[0].DescricaoAtividade} destination="goBack"/>
				
				<View style={styles.activityInfosSection}>
					<View style={styles.activityInfos}>
						<Feather style={styles.activityInfosIcon} name='calendar'></Feather>
						<Text style={styles.activityInfosText}> {activity[0].DiaMesInicioAtividade} </Text>
						
						<Feather style={styles.activityInfosIcon} name='clock'></Feather>
						<Text style={styles.activityInfosText}>
							{activity[0].HoraInicioAtividade} - {activity[0].HoraFimAtividade}
						</Text>
					</View>
					<View style={styles.activityInfos}>
						<Feather style={styles.activityInfosIcon} name='map-pin'></Feather>
						<Text style={styles.activityInfosText}>{activity[0].LocalAtividade}</Text>
					</View>
				</View>

				<ScrollView style={styles.content}>
					{
						activity.map((event, idx) => {

							const type = ( speakerTypes.includes(event.CategoriaPalestra) ? ( "event" ) : ("activity"));

							console.log(event);

							return (
								<View style={styles.eventsContent} key={event.PalestraId}>

									{ type === 'activity' ? (

										<TouchableOpacity style={styles.activitySpeakerSection}>
												
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
										<TouchableOpacity style={styles.activityEventSection} onPress={() => handdleActivityDetails(activity)}>
											
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
				
			</View>
		
	)
}