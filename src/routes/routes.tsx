// https://reactnavigation.org/docs/getting-started
// instalar react navigate:  npm react install @react-navigation/native
// instalar dependencias:  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// instalar o tipo de navegação. Nesse caso será stack (equivalente ao blank, no ionic)
//     npm install @react-navigation/stack

import React from 'react';
import {View, Text, Linking, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();

// import { DrawerContent } from '../Components/DrawerContent';

import Home from '../pages/Home';
import ProgTabs from './ProgTabs';
import Notes from '../pages/Notes';
import ContactInfo from '../pages/ContactInfo';
import GeneralInfo from '../pages/GeneralInformation';
import ActivityDetails from '../pages/ActivityDetails';

import logoImg from '../assets/logo-color.png';
import styles from './styles';

export default function Routes(){

	function CustomDrawerContent(props) {
		return (
			<DrawerContentScrollView style={styles.container} {...props}>

				<View style={styles.headerImageContainer}>
					<Image style={styles.headerImage} source={logoImg} />
				</View>
				

				{/* <DrawerItemList {...props} style={styles.menuItem} /> */}

				<DrawerItem style={styles.menuItem} label="Home" 
					onPress={ () => props.navigation.navigate('Home') }
				/>
				<DrawerItem style={styles.menuItem} label="Programação Científica" 
					onPress={ () => props.navigation.navigate('ProgCientifica') }
				/>

				<DrawerItem style={styles.menuItem} label="Minhas Anotações" 
					onPress={ () => props.navigation.navigate('Notes') }
				/>

				<DrawerItem style={styles.menuItem} label="Informações Gerais" 
					onPress={ () => props.navigation.navigate('GeneralInfo') }
				/>

				<DrawerItem style={styles.menuItem} label="Trabalhos Científicos" 
					onPress={() => Linking.openURL('https://cindor.com.br/')}
					icon={({color, size}) => (
						<Feather style={styles.menuIcon} name="external-link" color='red' size={22}></Feather>
					)}
				/>

				<DrawerItem style={styles.menuItem} label="Fotos do Evento" 
					onPress={() => Linking.openURL('https://cindor.com.br/')}
					icon={({color, size}) => (
						<Feather style={styles.menuIcon} name="external-link" color='red' size={22}></Feather>
					)}
				/>

				<DrawerItem style={styles.menuItem} label="Fale Conosco" 
					onPress={ () => props.navigation.navigate('ContactInfo') }
				/>
				
			</DrawerContentScrollView>
		);
	}
	
	return (
		<NavigationContainer>

			<AppDrawer.Navigator initialRouteName="Home" drawerContent={(props) =>  <CustomDrawerContent {...props} /> }>
				<AppDrawer.Screen name="Home" component={Home} options={{unmountOnBlur: true}}/>
				<AppDrawer.Screen name="ProgCientifica" component={ProgTabs} />
				<AppDrawer.Screen name="Notes" component={Notes} />
				<AppDrawer.Screen name="ContactInfo" component={ContactInfo} />
				<AppDrawer.Screen name="GeneralInfo" component={GeneralInfo} />
				<AppDrawer.Screen name="ActivityDetails" 
					component={ActivityDetails} 
					options={{drawerLabel: () => null}}
				/>
			</AppDrawer.Navigator>

		</NavigationContainer>
		
	);
}