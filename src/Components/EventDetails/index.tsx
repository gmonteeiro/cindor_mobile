import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, AsyncStorage } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import noImage from '../../assets/no-image.png';

export interface Event {
	"AtividadeId": number; 
	"CategoriaAtividade": string; 
	"CategoriaPalestra": string; 
	"DataFimAtividade": string; 
	"DataInicioAtividade": string; 
	"DataPalestra": string; 
	"DescricaoAtividade": string; 
	"DiaMesInicioAtividade": string; 
	"HoraFimAtividade": string; 
	"HoraFimPalestra": string; 
	"HoraInicioAtividade": string; 
	"HoraInicioPalestra": string; 
	"LocalAtividade": string; 
	"Minicurriculo": string; 
	"ObsAtividade": string; 
	"ObsPalestra": string; 
	"ObsParticipante": string; 
	"OrdemPalestra": number; 
	"PalestraId": number; 
	"PalestranteId": number; 
	"PalestranteImgUrl": string; 
	"PalestranteNome": string; 
	"PossuiTraducaoSimultanea": boolean; 
	"SubtemaPalestra": string; 
	"TemaPalestra": string; 
	"iniOrder": string; 
}

interface EventDetailsProps{
	event: Event;
	show: Boolean;
}

const EventDetails: React.FC<EventDetailsProps> = ({event}) => {
	const [favorites, setFavorites] = useState([]);
	const [isFavorite, setIsFavorites] = useState(false);


	function handleFavoriteEvent(id){
		let favoritesArray = favorites;

		console.log('favorites');
		console.log(favoritesArray);

		console.log('id');
		console.log(id);
		
		console.log(favoritesArray.includes(id));
		
		if(isFavorite){
			const idx = favoritesArray.findIndex((a) => {
				return a == id;
			});

			favoritesArray.splice(idx, 1);
			console.log('removido');
			console.log(favoritesArray);	
			setIsFavorites(false);		
		}else{
			favoritesArray.push(id);
			console.log('adicionado');
			console.log(favoritesArray);
			setIsFavorites(true);
		}
		setFavorites(favoritesArray);
		AsyncStorage.setItem("Favorites", JSON.stringify({"data": favoritesArray }));
	}

	useEffect(() => {
		AsyncStorage.getItem("Favorites").then(res => {
			if(res){
				console.log(res);
				const favoritesArray = JSON.parse(res).data;
				setFavorites(favoritesArray);
				setIsFavorites(favoritesArray.includes(event.PalestraId));
				console.log('favoritos');
				console.log(favoritesArray);
			}else{ 
				console.log('vazio');
			}
		})
	}, [event]);

  return (
		<View style={styles.modalContent}>
			<Text style={styles.itemDescription}>{event.TemaPalestra}</Text>

			<View style={styles.activityInfosContainer}>
				<View style={styles.activityInfosSection}>
					<View style={styles.activityInfos}>
						<Feather style={styles.activityInfosIcon} name='calendar'></Feather>
						<Text style={styles.activityInfosText}> {event.DiaMesInicioAtividade} </Text>
						
						<Feather style={styles.activityInfosIcon} name='clock'></Feather>
						<Text style={styles.activityInfosText}>
							{event.HoraInicioAtividade} - {event.HoraFimAtividade}
						</Text>
					</View>
					<View style={styles.activityInfos}>
						<Feather style={styles.activityInfosIcon} name='map-pin'></Feather>
						<Text style={styles.activityInfosText}>{event.LocalAtividade}</Text>
					</View>
				</View>

				<View style={styles.activityFavoriteSection}>
					<TouchableOpacity style={styles.favoriteButton} onPress={() => { handleFavoriteEvent(event.PalestraId) }} >
						<Feather name="star" style={ isFavorite ? styles.favoritedIcon : styles.unFavoritedIcon } size={22}></Feather>
					</TouchableOpacity>
				</View>
		  </View>

			<ScrollView style={styles.activitySpeakerEventSection}>
				{( event.PalestranteImgUrl == "noImage" ? 
					( <Image style={styles.activitySpeakerImage} source={ noImage }/> ) :
					( <Image style={styles.activitySpeakerImage} source={ {uri: event.PalestranteImgUrl} }/> )
				)}

				<View style={styles.activitySpeakerInfos}>
					<Text style={styles.activitySpeakerName}> {event.PalestranteNome} </Text>
					<Text style={styles.activitySpeakerRule}> {event.CategoriaPalestra} </Text>
				</View>

				<View style={styles.activitySpeakerBio}>
					<View style={styles.activitySpeakerBioTitleContainer}> 
						<Text style={styles.activitySpeakerBioTitle}> Minicurrículo </Text>
					</View>
					<Text style={styles.activitySpeakerBioDescription}> {event.Minicurriculo} </Text>
				</View>
			</ScrollView>

		</View>
  )
}

export default EventDetails;