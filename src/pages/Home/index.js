import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';

import logoImg from '../../assets/logo.png';
import sliderImg1 from '../../assets/slider-img1.png';
import bgHeader from '../../assets/bg-header.png';

import styles from './styles'

export default function Home(){
	StatusBar.setBarStyle('light-content', true);
    
	const navigation = useNavigation();
	let wd = Dimensions.get('window').width;
	let hg = Dimensions.get('window').height;

	function navigateToProg(){
		navigation.navigate('progCientifica');
	}

	return (
		<View style={styles.container}>

			<ImageBackground 
        resizeMode="cover" 
        source={bgHeader} 
        style={styles.content}
      >

        <View style={styles.topBar}>
          <BorderlessButton onPress={() => navigation.toggleDrawer()}>
						<Feather name="menu" color='#fff' size={26}></Feather>
          </BorderlessButton>

          <Image source={logoImg} />
        </View>

        {/* <Text style={styles.title}>Home</Text> */}
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

					<View style={styles.emptySection} height={(hg-wd-90)}>
						<Text style={styles.emptyText}>Você ainda não favoritou palestras!</Text>
						<TouchableOpacity style={styles.emptyButton} onPress={() => navigateToProg()}>
							<Text style={styles.emptyButtonText}>Ver Programação</Text>
						</TouchableOpacity>
					</View>

						{/* <FlatList
								data={incidents} 
								style={styles.incidentList}
								keyExtractor={incident => String(incident.id)}
								//showsVerticalScrollIndicator={false}
								onEndReached={loadIncidents}
								onEndReachedThreshold={0.2}
								renderItem={({item: incident}) => (
										<View style={styles.incident}>
												<Text style={styles.incidentProperty}>ONG</Text>
												<Text style={styles.incidentValue}>{incident.name}</Text>

												<Text style={styles.incidentProperty}>CASO</Text>
												<Text style={styles.incidentValue}>{incident.title}</Text>

												<Text style={styles.incidentProperty}>VALOR</Text>
												<Text style={styles.incidentValue}>
														{Intl.NumberFormat('pt-BR', { 
																style: 'currency', 
																currency: 'BRL' 
														}).format(incident.value)}
												</Text>

												<TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
														<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
														<Feather name="arrow-right" size={16} color="#e02041"></Feather>
												</TouchableOpacity>
										</View>
								)}
						/> */}
				</View>
			</ScrollView>	
		</View>

	);
}