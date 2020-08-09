import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; // expo install expo-constants

let hfHeight = Constants.height - Constants.width;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:'#ffffff'
    },

    content: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor:'#0e1783'
    },

    header:{
        flexDirection: "row",
        height:50,
        alignItems:"center",
        borderBottomColor:'#d30c13',
        borderBottomWidth:2,
        justifyContent:'center'
    },    

    menuButton:{
        position:'absolute',
        left:0,
        padding:5
    },

    slider: {
        marginTop:10,
        flex: 1,
    },

    slide: {
      flex: 1,
      backgroundColor: '#ffffff'
    },

    slideImg: {
        width:'100%',
    },

    title:{
        borderBottomColor:'#ffffff',
        borderBottomWidth:2,
        flexDirection:'row'
    },

    textTitle:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'bold',
        paddingBottom:7,
        paddingTop:15,
    },

    iconTitle:{
        paddingTop:17,
        paddingLeft:5
    },

    emptySection:{
        alignItems:'center',
        justifyContent:'center'
    },

    emptyText: {
        color:'#ffffff',
        fontSize:18
    },

    emptyButton:{
        borderColor:'#ffffff',
        borderWidth: 2,
        borderRadius:50,
        paddingHorizontal:35,
        paddingVertical:10,
        marginTop:15
    },

    emptyButtonText:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'bold'
    }

});