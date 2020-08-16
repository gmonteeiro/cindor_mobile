import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProgDate from '../pages/ProgDate';
import ProgTheme from '../pages/ProgTheme';

const { Navigator, Screen } = createBottomTabNavigator();

function ProgTabs() {
	return (
		<Navigator 
			tabBarOptions={{
				labelPosition: 'beside-icon',
				style: {
					elevation: 0,
					shadowOpacity: 0,
					height: 64,
					position: 'absolute',
					top: 250,
					borderBottomWidth: 5,
					borderBottomColor: "rgba(0,0,0,0.1)" 
				},
				tabStyle: {
					borderBottomWidth: 5,
					borderBottomColor: 'red'
				},
				iconStyle: {
					flex: 0,
					width: 20,
					height:20
				},
				labelStyle: {
					fontSize: 13,
				},
				inactiveBackgroundColor: '#fafafc',
				activeBackgroundColor: '#ebebf5',
				inactiveTintColor: '#c1bccc',
				activeTintColor: '#32264d'
			}}
		>
			<Screen 
				name="ProgDate" 
				component={ProgDate} 
				options={{
					tabBarLabel: 'Por Data',
					tabBarIcon: ({color, size, focused}) => {
						return(
							<Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
						);
					}
				}}
			/>
			<Screen 
				name="ProgTheme" 
				component={ProgTheme} 
				options={{
					tabBarLabel: 'Por Tema',
					tabBarIcon: ({color, size, focused}) => {
						return(
							<Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
						);
					}
				}}
			/>

		</Navigator>
	);
}

export default ProgTabs;