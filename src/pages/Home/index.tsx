import React, { useState, useEffect } from 'react';
import { View, Image, Text, ImageBackground, Dimensions, StatusBar,
	AsyncStorage, Modal  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

import logoImg from '../../assets/logo.png';
import sliderImg1 from '../../assets/slider-img1.png';
import bgHeader from '../../assets/bg-header.png';

import styles from './styles';
import api from '../../services/api';
import EventDetails from '../../Components/EventDetails';

export default function Home(){
	StatusBar.setBarStyle('light-content', true);

	const [activities, setActivities] = useState([]);
	const [events, setEvents] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [hasFavorite, setHasFavorites] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [currentEvent, setCurrentEvent] = useState({});
	
	const navigation = useNavigation();
	let wd = Dimensions.get('window').width;
	let hg = Dimensions.get('window').height;

	function handdleEventDetails(ev){
		console.log(ev);
		setCurrentEvent(ev);
		setModalVisible(true);
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
			if(type == 'Favorites'){
				AsyncStorage.getItem("Favorites").then(res => {
					if(res){
						console.log(res);
						const favoritesArray = JSON.parse(res).data;
						setFavorites(favoritesArray);
						setHasFavorites(true);
						console.log('favoritos');
						console.log(favoritesArray);
					}else{ 
						console.log('vazio');
						setHasFavorites(false);
					}
				})
			}else{
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
		loadData('Favorites');
	}, []);

	return (
		<View style={styles.container}>

			<ImageBackground resizeMode="cover" source={bgHeader} style={styles.content} >
        <View style={styles.topBar}>
          <BorderlessButton onPress={() => navigation.toggleDrawer()}>
						<Feather name="menu" color='#fff' size={26}></Feather>
          </BorderlessButton>

          <Image source={logoImg} />
        </View>
      </ImageBackground>

			<ScrollView style={styles.scrollView}>
				<View style={styles.slideContainer} height={wd}>
					<Swiper style={styles.wrapper} showsButtons={false} 
						dot={ <View style={{
							backgroundColor: 'rgba(255,255,255,0.5)',
							width: 7,
							height: 7,
							borderRadius: 7,
							marginLeft: 7,
							marginRight: 7,
							position:'relative',
							top:20
						}} /> }

						activeDot={ <View style={{
							backgroundColor: 'rgba(255,255,255,1)',
							width: 7,
							height: 7,
							borderRadius: 7,
							marginLeft: 7,
							marginRight: 7,
							position:'relative',
							top:20 
						}} /> }
					>
						<View style={styles.slide} >
							<Image style={styles.slideImg} source={sliderImg1} />
						</View>
						<View style={styles.slide} >
							<Image style={styles.slideImg} source={sliderImg1} />
						</View>
						<View style={styles.slide} >
							<Image style={styles.slideImg} source={sliderImg1} />
						</View>
					</Swiper>
				</View>

				<View style={styles.content}>

					<View style={styles.title}>
						<Text style={styles.textTitle}>Meus Favoritos</Text>
						<Feather style={styles.iconTitle} name="chevron-down" color='#ffffff' size={18}></Feather>
					</View>

					{ (!hasFavorite) ? 
						<View style={styles.emptySection}>
							<Text style={styles.emptyText}>Você ainda não favoritou palestras!</Text>
							<TouchableOpacity style={styles.emptyButton} onPress={() => navigation.navigate('Programação Científica')}>
								<Text style={styles.emptyButtonText}>Ver Programação</Text>
							</TouchableOpacity>
						</View>
					:
						events.filter(fav => favorites.includes(fav.PalestraId))
						.map((ev, idx) => {
							return (
								<TouchableOpacity style={styles.itemContent} key={idx} onPress={() => handdleEventDetails(ev)}>
									<Text style={styles.itemPeriod}>{ev.HoraInicioAtividade} - {ev.HoraFimAtividade}</Text>
									<Text style={styles.itemDescription}>{ev.DescricaoAtividade}</Text>
								</TouchableOpacity>
							)
						})
					}

				</View>
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

	);
}