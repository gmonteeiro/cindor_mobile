import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';

import PageHeader from '../../Components/PageHeader';

import styles from './styles';

export default function Notes(){
    StatusBar.setBarStyle('light-content', true);

    return(
      <View style={styles.container}>
				<PageHeader title="Nova Anotação"/>

				<View style={styles.content}>
					
				</View>
			</View>
				
    )
}

