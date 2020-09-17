// https://reactnavigation.org/docs/getting-started
// instalar react navigate:  npm react install @react-navigation/native
// instalar dependencias:  expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// instalar o tipo de navegação. Nesse caso será stack (equivalente ao blank, no ionic)
//     npm install @react-navigation/stack

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import ProgTabs from './ProgTabs';

export default function Routes(){
	
	return (
		<NavigationContainer>

			<AppDrawer.Navigator initialRouteName="Home">
					<AppDrawer.Screen name="Home" component={Home} />
					<AppDrawer.Screen name="Detail" component={Detail} />
					<AppDrawer.Screen name="Prog" component={ProgTabs} />
			</AppDrawer.Navigator>

		</NavigationContainer>
	);
}