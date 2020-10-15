import React, { useState } from 'react';
import { 
	View, ScrollView, Text, TextInput, 
	TouchableOpacity, Linking, StatusBar,
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import PageHeader from '../../Components/PageHeader';
import styles from './styles';

export default function ContactInfo(){
	StatusBar.setBarStyle('light-content', true);

	const [contactName, setContactName] = useState('');
	const [contactEmail, setContactEmail] = useState('');
	const [contactMessage, setContactMessage] = useState('');

	function handleNoteSubmit(){

		let message = `
			<b>Nome:</b> ${contactName} <br/>
			<b>E-mail:</b> ${contactEmail} <br/><br/>
			${contactMessage} <br/>
		`

		//expo install expo-mail-composer
		MailComposer.composeAsync({
			subject: `${contactName} - CINDOR 2020`,
			recipients: ['contato@cindor.com.br'],
			isHtml:true,
			body: message
		}).then(res => {
			console.log(res);
			
			if(res.status === 'sent'){
				setContactName('');
				setContactEmail('');
				setContactMessage('');
			}else{
				console.log('cancelled');
			}
		})
	}

	const navigation = useNavigation();

	
	
	return(
		<View style={styles.container}>
			<PageHeader title="Fale Conosco" destination="menu"/>

			<ScrollView style={styles.content} keyboardShouldPersistTaps='handled'>
				
				<View style={styles.formContainer}>
					<TextInput style={styles.formInput} 
						value={contactName}
						placeholderTextColor="#0e2283" 
						placeholder="Seu nome"
						onChangeText={text => setContactName(text)}
					/>

					<TextInput style={styles.formInput} 
						placeholder="Seu e-mail"
						placeholderTextColor="#0e2283" 
						textContentType='emailAddress'
						keyboardType='email-address'
						value={contactEmail}
						onChangeText={text => setContactEmail(text)}
					/>

					<TextInput style={{...styles.formInput, height:180}} 
						placeholder="Mensagem"
						placeholderTextColor="#0e2283" 
						returnKeyType='done'
						multiline={true} 
						value={contactMessage}
						onChangeText={text => setContactMessage(text)}
					/>

					<View style={styles.formSubmitButtomContainer}>
						<TouchableOpacity style={styles.formSubmitButtom} onPress={() => handleNoteSubmit()}>
							<Text style={styles.formSubmitText}>Enviar</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.contactInfoContainer}>

					<View style={styles.contactInfoContent}>
						<TouchableOpacity style={styles.contactInfoButtom} onPress={() => Linking.openURL('tel: +55 11912345678')}>
							<Entypo name="mobile" size={24} color="#0e2283" />
							<Text style={styles.contactInfoButtomText}>(+55) 11 91234-5678</Text>
						</TouchableOpacity>
					
						<TouchableOpacity style={styles.contactInfoButtom} 
							onPress={() => MailComposer.composeAsync({
								subject: 'CINDOR 2020',
								recipients: ['contato@cindor.com.br']
							})}
						>
							<Entypo name="mail-with-circle" size={24} color="#0e2283" />
							<Text style={styles.contactInfoButtomText}>contato@cindor.com.br</Text>
						</TouchableOpacity>
					</View>

					<Text style={styles.contactInfoSocialText}>
						Acompanhe também em nossas redes sociais.
					</Text>

					<View style={styles.contactInfoSocialContainer}>
						<TouchableOpacity style={styles.contactInfoSocialIcon} onPress={() => Linking.openURL('https://pt-br.facebook.com/congressointerdisciplinardadorusp/')}>
							<Entypo name="facebook-with-circle" size={30} color="#0e2283" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.contactInfoSocialIcon} onPress={() => Linking.openURL('https://www.instagram.com/cindor.usp/')}>
							<Entypo name="instagram-with-circle" size={30} color="#0e2283" />
						</TouchableOpacity>

						<TouchableOpacity style={styles.contactInfoSocialIcon}>
							<Entypo name="youtube-with-circle" size={30} color="#0e2283" />
						</TouchableOpacity>
					</View>

				</View>

			</ScrollView>
		</View>
	)
}