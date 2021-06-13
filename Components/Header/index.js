import React from 'react'
import {View,Image} from 'react-native'
import style from './style';

const index = () => {
    return (
        <View style={style.container}>
            <Image style={style.img} source={require('../../assets/logo.png')}/>
            <Image style={style.menu} source={require('../../assets/menu.png')}/>
        </View>
    )
}

export default index