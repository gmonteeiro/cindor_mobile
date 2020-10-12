import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({

    content: {
        height: Dimensions.get('window').height - 300,
        backgroundColor:'#fff',
        padding:20,
        paddingBottom: 50,
    }, 

    eventsContent: {
        minHeight: 50,
    },

    activityInfosSection:{
        paddingHorizontal: 20,
        paddingTop: 5,
    },
    activityInfos:{
        marginBottom: 5,
        flexDirection:'row',
        alignItems: 'center'
    },
    activityInfosIcon: {
        color: '#5f617d',
        marginRight: 5
    },
    activityInfosText: {
        color: '#5f617d',
        fontWeight: 'bold',
        marginRight: 15
    },

    activitySpeakerSection: {
        backgroundColor: '#e5edfe',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    activitySpeakerImage: {
        width: 60,
        height:60,
        borderRadius:60,
        marginRight: 10,
        
    },
    activitySpeakerName: {
        color: '#0072bc',
        fontWeight:'bold',
        marginBottom:3
    },
    activitySpeakerRule: {
        color: '#9698b6',
        fontSize: 12
    },

    activityEventSection: {
        // padding: 10
        borderLeftWidth:1,
        borderColor: "#ececec"
    },
    activityEventTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom:5,
        marginLeft:-5.5
    },
    activityEventDot:{
        width:10,
        height:10,
        backgroundColor: 'red',
        borderRadius:10,
        marginRight: 5
    },
    itemPeriod: {
        fontWeight: '700',
        color: '#9698b6',
        fontSize: 13
    },
    itemDescription: {
        paddingLeft: 9,
        fontSize: 15,
        fontWeight: '700',
        color: '#5f617d',
        textTransform: 'uppercase'
    },
    activitySpeakerEventSection: {
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },

})