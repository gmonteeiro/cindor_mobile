import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({

    content: {
        height: Dimensions.get('window').height - 250,
        backgroundColor:'#fff'
    },

    formContainer: {
        padding:20
    },
    formInput: {
        textAlignVertical:'top',
        color:'#0e2283',
        width:'100%',
        borderBottomWidth:2,
        borderColor:'#0e2283',
        lineHeight:20,
        marginBottom:20,
        padding:10,
    },
    formSubmitButtomContainer:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    formSubmitButtom: {
        backgroundColor: '#d30015',
        paddingVertical: 20,
        paddingHorizontal: 60,
    },
    formSubmitText: {
        textAlign:'center',
        color: '#fff',
        fontSize:18,
        fontWeight: 'bold'
    },

    contactInfoContainer: {
        backgroundColor:'#ececf4',
        padding:20,
        marginTop:20
    },
    contactInfoContent: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        marginTop:10
    },
    contactInfoButtom: {
        alignItems: 'center',
        padding:10,
    },
    contactInfoButtomText: {
        marginTop:10,
        fontWeight:'500',
        color:'#0e2283'
    },
    contactInfoSocialText: {
        marginTop:10,
        fontSize:18,
        fontWeight:'800',
        color:'#0e2283'
    },
    contactInfoSocialContainer: {
        flexDirection: 'row',
        marginTop:15,
        marginBottom:20
    },
    contactInfoSocialIcon: {
        marginRight:20
    }

})