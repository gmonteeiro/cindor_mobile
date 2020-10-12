// https://reactnavigation.org/docs/getting-started
// instalar react navigate:  npm react install @react-navigation/native
// instalar dependencias:  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// instalar o tipo de navegação. Nesse caso será stack (equivalente ao blank, no ionic)
//     npm install @react-navigation/stack

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();

import Home from '../pages/Home';
import ProgTabs from './ProgTabs';
import Notes from '../pages/Notes';
import ContactInfo from '../pages/ContactInfo';
import GeneralInfo from '../pages/GeneralInformation';
import ActivityDetails from '../pages/ActivityDetails';

export default function Routes(){
	
	return (
		<NavigationContainer>

			<AppDrawer.Navigator initialRouteName="Home">
				<AppDrawer.Screen name="Home" component={Home} />
				<AppDrawer.Screen name="Programação Científica" component={ProgTabs} />
				<AppDrawer.Screen name="Notes" component={Notes} />
				<AppDrawer.Screen name="Fale Conosco" component={ContactInfo} />
				<AppDrawer.Screen name="Informações Gerais" component={GeneralInfo} />
				<AppDrawer.Screen name="ActivityDetails" 
					component={ActivityDetails} 
					options={{drawerLabel: () => null}}
				/>
			</AppDrawer.Navigator>

		</NavigationContainer>

		
	);
}