import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, Alert, AsyncStorage, StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../Components/PageHeader';

import styles from './styles';

export default function Notes(){
		StatusBar.setBarStyle('light-content', true);
		const [modalVisible, setModalVisible] = useState(false);
		const [noteTitle, setNoteTitle] = useState('');
		const [noteContent, setNoteContent] = useState('');

		const [notes, setNotes] = useState([]);

		useEffect(() => {
			AsyncStorage.getItem('Notes').then(response => {
				if(response){
					setNotes(JSON.parse(response));
					console.log('entrou');
					console.log(notes);
				}else{
					console.log('no response');
				}
			})
		}, [])

		async function handleNoteSubmit(){

			let values = {
				'noteTitle': noteTitle,
				'noteContent' : noteContent
			};

			notes.push(values);

			console.log(values);

			try {
				await AsyncStorage.setItem('Notes', JSON.stringify(values));
			} catch(e) {
				console.log('erro');
			}
	
			setModalVisible(false);
			
		}

    return(
      <View style={styles.container}>
				<PageHeader title="Minhas Anotações"/>

				<View style={styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={false}
						visible={modalVisible}
						onRequestClose={() => {
							Alert.alert("Modal has been closed.");
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>

								<TouchableOpacity style={styles.modalCloseButton} onPress={() => { setModalVisible(false) }} >
									<Feather name="x" color='#ccc' size={22}></Feather>
								</TouchableOpacity>

								<Text style={styles.modalTitle}>Nova Anotação</Text>
								
								<Text style={styles.modalInputLabel}>Título</Text>
								<TextInput style={styles.modalInput} 
									multiline={true}  // para deixar o texto no top no iOS 
									value={noteTitle}
									onChangeText={text => setNoteTitle(text)}
								/>

								<Text style={styles.modalInputLabel}>Sua anotação</Text>
								<TextInput style={{...styles.modalInput, height:180}} 
									multiline={true} 
									value={noteContent}
									onChangeText={text => setNoteContent(text)}
								/>

								<TouchableOpacity style={styles.emptyButton} onPress={() => handleNoteSubmit()}>
									<Text style={styles.emptyButtonText}>Salvar</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
    		</View>

				
				<View style={styles.content}>
					<View style={styles.emptySection}>
						<Text style={styles.emptyText}>Você ainda não fez anotações!</Text>
						<TouchableOpacity style={styles.emptyButton} onPress={() => setModalVisible(true)}>
							<Text style={styles.emptyButtonText}>Criar Nova</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
				
    )
}

