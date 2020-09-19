import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    emptySection:{
        height: Dimensions.get('window').height - 300,
        alignItems:'center',
        justifyContent:'center'
    },

    emptyText: {
        color:'#9698b5',
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
    }
})