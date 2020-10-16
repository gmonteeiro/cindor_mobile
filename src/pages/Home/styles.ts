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
        backgroundColor: '#e5edfe',
    },

    scrollView:{
        flex:1
    },

    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        borderBottomColor:'#0e2283',
        borderBottomWidth:2,
        flexDirection:'row'
    },

    textTitle:{
        color:'#0e2283',
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
        marginTop:50,
        marginBottom:-30,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonSection:{
        minHeight:60,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:80
    },

    emptyText: {
        color:'#0e2283',
        fontSize:18
    },

    emptyButton:{
        borderColor:'#0e2283',
        borderWidth: 2,
        borderRadius:50,
        paddingHorizontal:35,
        paddingVertical:10,
        marginTop:15
    },

    emptyButtonText:{
        color:'#0e2283',
        fontSize:16,
        fontWeight:'bold'
    },

    favoriteSection: {
        marginBottom: 30
    },
    itemContent: {
        paddingHorizontal: 10,
        borderLeftWidth:3,
        backgroundColor:'#e1e9fa',
        borderLeftColor:'#9698b6',
        marginLeft:1,
        marginTop:10,
        
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


    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'rgba(0,0,0,0.8)'
    },
    modalView: {
        width:'90%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        // padding: 10,
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
    },

});