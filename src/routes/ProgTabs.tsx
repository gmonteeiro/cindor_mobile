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
					borderBottomWidth:3,
					borderBottomColor: '#0e2283'
				},
				tabStyle: {
				},
				iconStyle: {
					flex: 0,
					width:10,
					height:60,
					
				},
				labelStyle: {
					fontSize: 14,
					fontWeight: 'bold'
				},
				inactiveBackgroundColor: '#ebebf5',
				activeBackgroundColor: '#fafafc',
				inactiveTintColor: '#c1bccc',
				activeTintColor: '#0e2283'
			}}
		>
			<Screen 
				name="ProgDate" 
				component={ProgDate} 
				options={{
					tabBarLabel: 'Por Data',
					tabBarIcon: ({color, size, focused}) => {
						return(
							<Ionicons name="ios-calendar" size={size} color={focused ? '#0e2283' : color} />
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
							<Ionicons name="ios-heart" size={size} color={focused ? '#0e2283' : color} />
						);
					}
				}}
			/>

		</Navigator>
	);
}

export default ProgTabs;