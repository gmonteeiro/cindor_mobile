import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../Components/PageHeader';

import styles from './styles';

function ProgDate(){
	return(
		<View style={styles.container}>
			<PageHeader title="Programação Científica"/>
		</View>
	)
    
}

export default ProgDate;