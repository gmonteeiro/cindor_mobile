import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import backIcon from '../../assets/back.png';
import logoImg from '../../assets/logo.png';
import bgHeader from '../../assets/bg-header.png';

import styles from './styles';

interface PageHeaderProps{
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {

  StatusBar.setBarStyle('light-content', true);

  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Home');
  }

  return (
    <View style={styles.container}>

      <ImageBackground 
        resizeMode="cover" 
        source={bgHeader} 
        style={styles.content}
      >

        <View style={styles.topBar}>
          <BorderlessButton onPress={handleGoBack}>
            <Image source={backIcon} resizeMode="contain" />
          </BorderlessButton>

          <Image source={logoImg} resizeMode="contain"/>
        </View>

        <Text style={styles.title}>{ title }</Text>
      </ImageBackground>
    </View>
  )
}

export default PageHeader;