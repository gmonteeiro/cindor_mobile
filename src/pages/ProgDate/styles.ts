import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    content:{
        flex:1,
        padding:40,
        marginTop:60,
        backgroundColor: '#cacaca'
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
})

export default styles;