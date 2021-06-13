import React from 'react';
import {ImageBackground,View,Text} from 'react-native';
import style from './style';
import StyleButton from '../StyledButton';

const CarItem = (props) => {
    
    const {name,tag,subtag,image} = props.car;
    
    return (

        <View style={style.carContainer}>
            <ImageBackground source={image} 
             style={style.image}/>
  
            <View style={style.titles}>
                <Text style={style.title}>{name}</Text>
                <Text style={style.subtitle}>
                    {tag}
                    {' '}
                    <Text style={style.subtag}>
                       {subtag}     
                    </Text>
                </Text>
            </View> 

            <View style={style.btnContainer}>
                <StyleButton type="primary" label="customer order" onPress={()=>{console.warn("This is customer order")}}/>
                <StyleButton type="secondary" label="existing inventory" onPress={()=>{console.warn("This is existing inventory")}}/>
            </View>
            
        </View>
    )
}

export default CarItem;