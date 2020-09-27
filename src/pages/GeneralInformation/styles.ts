import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({

    content: {
        height: Dimensions.get('window').height - 250,
        backgroundColor:'#fff',
        padding:20
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
        width:'70%',
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
        paddingHorizontal: 10
    },
    itemDescription: {
        color:'#9698b6',
        marginVertical:10,
        textAlign:'justify'
    }
})