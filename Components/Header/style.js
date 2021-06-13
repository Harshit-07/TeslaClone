import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container:{
        position:'absolute',
        top:50,
        zIndex:100,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:20,
    },

    img:{
        height:30,
        width:100,
        resizeMode:'contain',
    },

    menu:{
        height:30,
        width:30,
        resizeMode:'contain',
    }

})

export default style