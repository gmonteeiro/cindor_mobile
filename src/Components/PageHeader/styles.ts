import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0e2283',
        paddingTop:20,
        height: 250,
        overflow:'hidden'
    },

    content:{
        paddingVertical:40,
        paddingHorizontal:20,
    },

    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title:{
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        marginVertical: 40,
        fontWeight: '900',
        textTransform: 'uppercase'
    },

    dot: {
        color: 'red',
        fontSize: 30
    }
});

export default styles;