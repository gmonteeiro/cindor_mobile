import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Alert} from 'react-native';
import { StatusBar } from 'react-native';

import PageHeader from '../../Components/PageHeader';

import styles from './styles';

export default function Notes(){
		StatusBar.setBarStyle('light-content', true);
		const [modalVisible, setModalVisible] = useState(false);

    return(
      <View style={styles.container}>
				<PageHeader title="Minhas Anotações"/>


				<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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

