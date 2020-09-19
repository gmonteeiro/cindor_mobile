import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    
    emptySection:{
        height: Dimensions.get('window').height - 300,
        alignItems:'center',
        justifyContent:'center'
    },

    emptyText: {
        color:'#9698b5',
        fontSize:18
    },

    emptyButton:{
        borderColor:'#0e2283',
        borderWidth: 2,
        borderRadius:50,
        paddingHorizontal:35,
        paddingVertical:10,
        marginTop:15
    },

    emptyButtonText:{
        color:'#0e2283',
        fontSize:16,
        fontWeight:'bold'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})