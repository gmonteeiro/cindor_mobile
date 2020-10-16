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
    itemTitle: {
        width:'85%',
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
        marginLeft:1,
        marginTop:10
    },

    activityInfosSection:{
        // paddingHorizontal: 20,
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
        marginRight: 15,
        fontSize: 14
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