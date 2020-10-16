import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#e5edfe',
    },
    headerImageContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 150,
        textAlign: "center"
    },
    headerImage: {
        
        resizeMode: "contain",
        height:100,
        width: 200,
        justifyContent:'center'
    },
    menuItem: {
        borderBottomWidth: 1,
        borderColor: '#c9ccf0',
        borderRadius: 0
    },
    menuIcon: {
        position:'relative',
        left:210,
        marginRight: -55
    }

})