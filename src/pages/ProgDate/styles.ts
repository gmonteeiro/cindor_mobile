import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    content: {
        height: Dimensions.get('window').height - 300,
        backgroundColor:'#fff',
        padding:20,
        marginTop:65
    }, 

    item: {
        minHeight:60,
        paddingBottom:10
    },

    itemOption: {
        flexDirection: 'row',
        backgroundColor: '#e5edfe',
        alignItems:'center'
    },
    itemIndex: {
        width:'15%',
        fontWeight:'900',
        fontSize:18,
        textAlign:'center',
        color:'#0072bc',
        paddingVertical: 15,
    },
    itemTitle: {
        width:'83%',
        paddingLeft:10,
        color:'#0e1783',
        fontWeight:'700'
    },
    itemIcon: {
        width:'15%',
        fontWeight:'900',
        fontSize:24,
        color:'red',
        textAlign:'center',
        paddingVertical: 15,
    },
    itemContent: {
        paddingHorizontal: 10,
        borderLeftWidth:3,
        backgroundColor:'#fafafa',
        borderLeftColor:'#9698b6',
        marginLeft:10,
        marginTop:10
    },
    itemDescription: {
        fontWeight:'bold',
        color:'#5f617d',
        textAlign:'justify',
        marginTop:5,
        marginBottom:10
    },
    itemPeriod: {
        fontSize: 11,
        fontWeight:'bold',
        color:'#9698b6',
        paddingTop:10,
        textAlign:'justify'
    },

    itemActivity: {
        minHeight:60,
        paddingLeft:10
    },

    itemActivityOption: {
        marginTop:5,
        flexDirection: 'row',
        // backgroundColor: '#fcfcfc',
        borderBottomWidth: 1,
        borderColor: '#eaeaea',
        alignItems:'center'
    },
    itemActivityIndex: {
        width:'15%',
        fontWeight:'900',
        fontSize:18,
        textAlign:'center',
        color:'#0072bc',
        paddingVertical: 15,
    },
    itemActivityTitle: {
        width:'83%',
        paddingLeft:10,
        color:'#0e1783',
        fontWeight:'700',
        textTransform: 'uppercase'
    },
    itemActivityIcon: {
        width:'15%',
        fontWeight:'900',
        fontSize:24,
        color:'red',
        textAlign:'center',
        paddingVertical: 15,
    },
    activityInfosSection:{
        paddingBottom:5,
        paddingTop: 5,
    },
    activityInfos:{
        marginBottom: 5,
        flexDirection:'row',
        alignItems: 'center'
    },
    activityInfosIcon: {
        color: '#aaa',
        marginRight: 5
    },
    activityInfosIconNext: {
        textAlign:'right',
        marginTop:-30,
        fontSize:18
    },
    activityInfosText: {
        color: '#aaa',
        fontWeight: 'bold',
        marginRight: 15,
        fontSize: 12
    },
    activityInfosTitle:{
        fontSize: 14,
        color: '#5f617d',
        paddingVertical:5
    },

    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgba(0,0,0,0.5)'
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
        // position: 'absolute',
        // right: 27,
        // top: 27,
        zIndex:9999
    },
})

export default styles;