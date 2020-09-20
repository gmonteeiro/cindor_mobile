import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; // expo install expo-constants

let hfHeight = Constants.height - Constants.width;

export default StyleSheet.create({
    // container: {
    //     flex: 1,
    //     paddingTop: Constants.statusBarHeight,
    //     backgroundColor:'#ffffff'
    // },

    // content: {
    //     flex: 1,
    //     paddingHorizontal: 24,
    //     backgroundColor:'#0e1783'
    // },

    container:{
        flex: 1,
        backgroundColor: '#0e2283',
        paddingTop:20
    },

    content:{
        paddingVertical:40,
        paddingHorizontal:20,
    },

    scrollView:{
        flex:1
    },

    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title:{
        color: '#ffffff',
        fontSize: 24,
        lineHeight: 32,
        marginVertical: 40
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


    slideContainer:{
        marginTop:10
    },

    wrapper:{
       
    },

    slide: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    slideImg: {
        flex:1,
        width:'100%'
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