import React, { useState, useEffect } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

import api from '../../services/api';
import styles from './styles';

interface ActivityDetailsProps{
  id: string;
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({id}) => {

  const [activities, setActivities] = useState([]);

  async function loadActivities(){
		
		const response = await api.get(`/GetById?codEve=3&atividadeId=${id}`,{});
		console.log(response.data);

	
		// console.log(data);

		// setActivities(data);
	}

	useEffect(() => {
		loadActivities();
	}, []);

  return (
    <View style={styles.container}>

      
    </View>
  )
}

export default ActivityDetails;