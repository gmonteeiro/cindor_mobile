import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../Components/PageHeader';
import noImage from '../../assets/no-image.png';

import api from '../../services/api';
import styles from './styles';

function ProgDate(){
	const [activities, setActivities] = useState([]);
	const [loading, setLoading] = useState(false);
	const eventDays = ["12/12/2020","13/12/2020","14/12/2020","15/12/2020"];
	const speakerTypes = ["PALESTRANTE", "EQUIPE DE PROFESSORES", "DEBATEDOR"]

	const navigation = useNavigation();

	function navigateToDetail(event){
		navigation.navigate('Detail', { event });
	}

	async function loadActivities(){
		if(loading){
			return;
		}

		setLoading(true);

		const response = await api.get('',{ });

		const data = response.data.map(a => ({...a, 
			iniOrder: 
				a.DataInicioAtividade.substring(0,10)
				.concat(a.HoraInicioAtividade.substring(11,16))
				.concat(a.OrdemPalestra)
				.replace(/:|-/g, ""),
			DataPalestra: a.DataPalestra.substring(8,10).concat("/")
				.concat(a.DataPalestra.substring(5,7)).concat("/")
				.concat(a.DataPalestra.substring(0,4)),
			HoraInicioPalestra: a.HoraInicioPalestra.substring(11,16),
			HoraFimPalestra: a.HoraFimPalestra.substring(11,16),
			DataInicioAtividade: a.DataInicioAtividade.substring(8,10).concat("/")
				.concat(a.DataInicioAtividade.substring(5,7)).concat("/")
				.concat(a.DataInicioAtividade.substring(0,4)),
			DataFimAtividade: a.DataFimAtividade.substring(8,10).concat("/")
				.concat(a.DataFimAtividade.substring(5,7)).concat("/")
				.concat(a.DataFimAtividade.substring(0,4)),
			HoraInicioAtividade: a.HoraInicioAtividade.substring(11,16),
			HoraFimAtividade: a.HoraFimAtividade.substring(11,16),
			PalestranteImgUrl: (a.PalestranteImgUrl == null ? noImage : a.PalestranteImgUrl)
		}))

		setActivities(groupBy( data, 'AtividadeId'));

		setLoading(false);
	}

	function groupBy(data, key) {
		return data.reduce((acc, x) => {
			acc[x[key]] = [...(acc[x[key]] || []), x];
			return acc;
		}, []);
	}

	useEffect(() => {
		loadActivities();
	});

	return(
		<View style={styles.container}>
			<PageHeader title="Programação Científica data"/>

			<View style={styles.content}>
		
				<View style={styles.title}>
					<Text style={styles.textTitle}>Prog Cientifica</Text>
				</View>

				<FlatList
					data={eventDays} 
					style={styles.eventDaysList}
					keyExtractor={day => day}
					renderItem={({item: day}) => (

						<View style={styles.eventDaySection}>

							<View style={styles.eventDayHeader}>
								<Text style={styles.eventDayTitle}>{day}</Text>
								<Feather style={styles.eventDayIcon} name="plus" color='#ffffff' size={18}></Feather>
							</View>

							<View style={styles.eventDayBody}>
								<FlatList
									data={activities.map(activity => (
										activity.filter(talk => talk.DataPalestra === day)
										.sort((a,b) => a.iniOrder - b.iniOrder)))} 
									style={styles.activitiesList}
									keyExtractor={(item, index) => index.toString()}
									renderItem={({item: act}) => (

										<FlatList
											data={act} 
											style={styles.activitiesList}
											keyExtractor={(item) => item.PalestraId.toString()}
											renderItem={({item: talk, index: idx}) => (
												(idx === 0 ? (
													<View style={styles.activityList}>
														{/* <Text style={styles.activityList}>{talk.TemaPalestra}</Text> */}
														
														<Text style={styles.activityTitle}>{talk.DescricaoAtividade}</Text>
														
														
														<View style={styles.activityLocation}>
															<Feather name="map-pin" size={16} color="red" style={styles.activityLocationIcon}/>
															<Text style={styles.activityLocationText}>{talk.LocalAtividade}</Text>
														</View>

														<View style={styles.activityDate}>
															<Feather name="clock" size={15} color="red" style={styles.activityDateIcon}/>
															<Text style={styles.activityDateText}>{talk.HoraInicioAtividade} - {talk.HoraFimAtividade}</Text>
														</View>
													</View>
												) : (
													<View style={{display: "none"}}></View>
												))

											)}
										/>
									)}
								/>

							</View>

						</View>
						
					)}
				/>
			</View>
		</View>
	)
	
}

export default ProgDate;