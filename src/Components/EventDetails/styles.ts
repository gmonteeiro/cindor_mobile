import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    modalContent: {
        width: '100%'
    },
    
    itemDescription: {
        backgroundColor: '#e5edfe',
        width: '100%',
        color: '#0072bc',
        fontWeight: '800',
        textTransform: 'uppercase', 
        marginLeft: 0,
        marginBottom: 10,
        paddingHorizontal: 10, 
        paddingVertical:15,
        fontSize: 16
    },
    activityInfosContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    activityFavoriteSection: {
        borderRadius: 30,
        overflow: 'hidden',
        marginRight: 10
    },
    unFavoritedIcon: {
        color: '#bbb',
        paddingVertical:9,
        paddingHorizontal:10,
        backgroundColor: '#eaeaea'
    },
    favoritedIcon: {
        color: '#fff',
        backgroundColor: '#0072bc',
        paddingVertical:9,
        paddingHorizontal:10,
    },
    activityInfosSection:{
        paddingTop: 10,
        paddingHorizontal: 10
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

    activitySpeakerImage: {
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').width - 60,
        borderRadius: 5,
        marginTop: 15,
        paddingHorizontal: 10,
        marginLeft: 10
    },
    activitySpeakerInfos: {
        width: Dimensions.get('window').width - 60,
        backgroundColor: 'rgba(0,0,0,0.08)',
        padding: 10,
        marginTop: -62,
        marginLeft: 10
    },
    activitySpeakerName:{
        color: '#fff',
        fontWeight: '900',
        fontSize: 20
    },
    activitySpeakerRule: {
        color: '#bababa',
        fontWeight: '700'
    },

    activitySpeakerBio: {
        backgroundColor: "#0072bc",
        paddingTop: 60,
        marginTop: -55,
        paddingHorizontal: 10,
        position: 'relative',
        zIndex:-1,
        width:'100%',
    },
    activitySpeakerBioTitleContainer:{
        borderBottomWidth: 2,
        borderColor: "#fff",
    },
    activitySpeakerBioTitle: {
        paddingTop: 20,
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
        marginLeft:-5
    },
    activitySpeakerBioDescription: {
        paddingTop:10,
        paddingBottom:15,
        color:'#fff'
    },
});

export default styles;