import React from 'react'
import {View, Pressable,Text} from 'react-native'
import style from './style';

const StyleButton = (props) => {

    // const type = props.type;
    // const label = props.label;
    // const onPress = props.onPress;

    //ES6 -
    const {type,label,onPress} = props;
    
    const BgColor = type === 'primary' ? '#41444A' : 'white';
    const txtColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={style.container}>
            <Pressable
                style={[style.button,{backgroundColor:BgColor}]}
                onPress = { () =>{
                    onPress()}}
            >
            <Text style={[style.text,{color:txtColor}]}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton


ReferenceError