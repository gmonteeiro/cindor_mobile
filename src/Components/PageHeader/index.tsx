import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/back.png';
import logoImg from '../../assets/logo.png';

import styles from './styles';
import { NativeScreen } from 'react-native-screens';

interface PageHeaderProps{
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain"/>
      </View>

      <Text style={styles.title}>{ title }</Text>
    </View>
  )
}

export default PageHeader;