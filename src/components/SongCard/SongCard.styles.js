import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        left: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inner_container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    info_container: {
        flexDirection: 'row',
    },
    year: {
        marginLeft: 10,
        color: '#989',
        fontWeight: 'bold',
        fontSize: 10
    }
    
})