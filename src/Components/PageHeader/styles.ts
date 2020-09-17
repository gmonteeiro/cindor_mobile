import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0e2283',
        paddingTop:20,
        height: 250
    },

    content:{
        padding:40
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
    }
});

export default styles;