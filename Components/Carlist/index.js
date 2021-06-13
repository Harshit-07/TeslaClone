import React from 'react';
import { View,FlatList,Dimensions } from 'react-native';
import CarItem from '../CarItem';
import style from './style';
import car from './car';

const index = () => {
    return (
        <View style={style.container}>
            <FlatList 
                data={car}
                renderItem={({item}) => <CarItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default index;