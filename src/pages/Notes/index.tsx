import React, { useState, useEffect } from 'react';
import { 
	View, Text, TextInput, Modal, 
	TouchableOpacity, Alert, AsyncStorage, StatusBar,
	FlatList
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../Components/PageHeader';
import styles from './styles';

export default function Notes(){
	StatusBar.setBarStyle('light-content', true);

	const [modalVisible, setModalVisible] = useState(false);
	const [modalViewerVisible, setModalViewerVisible] = useState(false);
	const [noteTitle, setNoteTitle] = useState('');
	const [noteContent, setNoteContent] = useState('');
	const [currentNote, setCurrentNote] = useState({});
	const [showEmptyContent, setShowEmptyContent] = useState(false);
	const [editMode, setEditMode] = useState(false);

	const [notes, setNotes] = useState([]);

	useEffect(() => {
		AsyncStorage.getItem('Notes').then(response => {
			if(response){
				const responseNotes = JSON.parse(response);

				(responseNotes.length > 0 ? (setNotes(responseNotes)) : (setShowEmptyContent(true)))
			}else{
				console.log('no response');
				setShowEmptyContent(true);
			}
		})

	}, [])

	async function handleNoteSubmit(){

		if(noteTitle != ''){

			let notesArray = notes;
			let nextId = 0;

			if(notesArray.length > 0){nextId = notesArray[notesArray.length-1].id+1}

			if(editMode){
				notesArray[currentNote.index] = currentNote;
				notesArray[currentNote.index].noteTitle = noteTitle;
				notesArray[currentNote.index].noteContent = noteContent;
				delete notesArray[currentNote.index].index;
			}else{
				let values = {
					'id':nextId,
					'date':new Date(),
					'eventId':null,
					'noteTitle': noteTitle,
					'noteContent' : noteContent
				};

				notesArray.push(values);
			}

			console.log(notesArray);

			try {
				await AsyncStorage.setItem('Notes', JSON.stringify(notesArray));
				setNoteTitle('');
				setNoteContent('');
				setNotes(notesArray);
				setCurrentNote({});
				setEditMode(false);
				setShowEmptyContent(false);

				Alert.alert(
					'SUCESSO!',
					'Sua anotação foi salva.',
					[ { text: 'OK', onPress: () => setModalVisible(false) } ],
					{ cancelable: false }
				);
				
			} catch(e) {
				console.log('erro', e);

				Alert.alert(
					'Erro!',
					'Não foi possível salvar sua anotação.',
					[ { text: 'OK', onPress: () => console.log('OK Pressed') } ],
					{ cancelable: false }
				);
			}
		}else{
			setModalVisible(false);
		}
	}

	function handleNoteVisualization(data, index){
		data.index = index;
		setCurrentNote(data);
		setNoteTitle(data.noteTitle);
		setNoteContent(data.noteContent);
		setModalViewerVisible(true);
	}

	function handleEditNote(){
		setModalViewerVisible(false);
		setEditMode(true);
		setModalVisible(true);
	}

	function handleDeleteNote(){
		let notesArray = notes;

		Alert.alert(
			'Tem certeza que deseja Deletar sua Anotação?',
			'',
			[ { text: 'Cancelar', onPress: () => console.log('Canceld Pressed') },
				{ text: 'SIM', onPress: () => {
					notesArray.splice(currentNote.index, 1);

					AsyncStorage.setItem('Notes', JSON.stringify(notesArray)).then(res => {
						setNotes(notesArray);
						setNoteTitle('');
						setNoteContent('');
						setShowEmptyContent(notesArray.length < 1);
						setCurrentNote({});
						setModalViewerVisible(false);
					});	
				}}
				
			],
			{ cancelable: false }
		);
	}

	return(
		<View style={styles.container}>
			<PageHeader title="Minhas Anotações" destination="Home"/>

			<View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
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
			
			{ showEmptyContent && (
				<View style={styles.content}>
					<View style={styles.emptySection}>
						<Text style={styles.emptyText}>Você ainda não fez anotações!</Text>
						<TouchableOpacity style={styles.emptyButton} onPress={() => setModalVisible(true)}>
							<Text style={styles.emptyButtonText}>Criar Nova</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}

			
			{ !showEmptyContent && (
				<View style={styles.content}>
					<TouchableOpacity style={styles.newNoteButton} onPress={() => setModalVisible(true)}>
						<Feather name="plus" color='#fff' size={22}></Feather>
					</TouchableOpacity>

					<FlatList
						data={notes} 
						style={styles.notesList}
						keyExtractor={note => String(note.id)}
						renderItem={({item: note, index: idx}) => (
							<TouchableOpacity style={styles.noteItem} onPress={() => handleNoteVisualization(note, idx)}>
								<Text style={styles.noteTitle}>{note.noteTitle}</Text>
								<Text style={styles.noteContent}>{note.noteContent}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			)}

			<View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalViewerVisible}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>

							<TouchableOpacity style={styles.modalCloseButton} onPress={() => { setModalViewerVisible(false) }} >
								<Feather name="x" color='#ccc' size={22}></Feather>
							</TouchableOpacity>

							<Text style={styles.modalViewerTitle}>{currentNote.noteTitle}</Text>
							<Text style={styles.modalViewerContent}>{currentNote.noteContent}</Text>

							<View style={styles.modalViewerOptions}>
								<TouchableOpacity style={styles.modalActionButton} onPress={() => { handleDeleteNote() }} >
									<Feather name="trash-2" color='#e26a6a' size={22}></Feather>
								</TouchableOpacity>

								<TouchableOpacity style={styles.modalActionButton} onPress={() => { handleEditNote() }} >
									<Feather name="edit" color='#2574a9' size={22}></Feather>
								</TouchableOpacity>
							</View>
							
						</View>
					</View>
				</Modal>
			</View>

		</View>
			
	)
}

