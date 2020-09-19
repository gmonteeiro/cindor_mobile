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
        marginTop:15,
        marginBottom:10
    },

    emptyButtonText:{
        color:'#0e2283',
        fontSize:16,
        fontWeight:'bold'
    },

    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width:'90%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    modalCloseButton:{
        position: 'absolute',
        right: 7,
        top: 7,
        zIndex:999
    },
    modalTitle: {
        fontSize:22,
        textAlign: 'center',
        width: '100%',
        marginBottom:20,
        fontWeight:'700'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalInputLabel:{
        width:'100%',
        textAlign:'left',
        fontWeight:'500',
        color:'#9698b5',
        marginBottom:3
    },
    modalInput:{
        textAlignVertical:'top',
        width:'100%',
        minHeight:30,
        backgroundColor:'#fafafa',
        marginBottom:20,
        padding:5
    }
})