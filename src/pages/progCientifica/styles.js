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
    
    eventDayHeader:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingLeft:7,
        backgroundColor:'rgba(255,255,255,0.3)',
        marginBottom: 10,
        borderColor:'rgba(255,255,255,0.15)',
        borderWidth:1
    },

    eventDayTitle:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:16,
        lineHeight:60
    },

    eventDayIcon:{
        backgroundColor:'rgba(255,255,255,0.4)',
        padding:20,
        fontWeight:"bold"
    },

    eventDayBody:{
        borderColor:'rgba(255,255,255,0.5)',
        borderWidth:1,
        display:"none"
    },

    activityTitle:{
        color:"#ffffff"
    }

});