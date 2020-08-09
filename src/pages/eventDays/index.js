import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, List, ListItem, Separator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import api from '../../services/api';
import styles from './styles';

import logoImg from '../../assets/logo.png';
import noImage from '../../assets/no-image.png';



export default function ProgCientifica(){
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

	return (
		<View style={styles.container}>
				
			<View style={styles.header}>
				<TouchableOpacity style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
					<Feather name="menu" color='#d30c13' size={26}></Feather>
				</TouchableOpacity>
				<Image source={logoImg} />
			</View>

			<View style={styles.content}>

				<View style={styles.title}>
					<Text style={styles.textTitle}>Prog Cientifica</Text>
					<Feather style={styles.iconTitle} name="chevron-down" color='#ffffff' size={18}></Feather>
				</View>

				<FlatList
					data={eventDays} 
					style={styles.eventDaysList}
					keyExtractor={day => day}
					renderItem={({item: day}) => (

					
			<Text style={styles.textTitle}>{day}</Text>


						
					)}
				/>
			</View>
		</View>

	);
}