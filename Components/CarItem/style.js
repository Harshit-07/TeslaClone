import {StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
  
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
      },
    
      titles:{
        marginTop:'35%',
        width:'100%',
        alignItems:'center',
      },
    
      title:{
        fontSize:50,
        fontWeight:'100',
      },
    
      subtitle:{
        fontSize:16,
        color:'#2B2B2B',
      },

      subtag :{
        textDecorationLine:'underline',
        fontWeight:'bold',
      },
    
      image:{
        width:'100%',
        height:Dimensions.get('window').height,
        // resizeMode: 'cover',
        position:'absolute',
      },

      btnContainer:{
        position:'absolute',
        bottom:90,
        width:'100%',
      }

});

export default styles;