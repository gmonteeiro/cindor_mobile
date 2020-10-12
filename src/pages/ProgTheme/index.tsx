import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../Components/PageHeader';

import styles from './styles';

function ProgTheme(){
	return(
		<View style={styles.container}>
			<PageHeader title="Programação Científica tema" destination="Home"/>
		</View>
	)
    
}

export default ProgTheme;