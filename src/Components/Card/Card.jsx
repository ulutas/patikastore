import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CardStyle from './Card.Style';

const Card = ({product}) => {
  return (
    <View style={CardStyle.container}>
      <TouchableOpacity
        style={CardStyle.button_container}
        onPress={() => console.log('Haber bulunamadı!')}>
        <Image source={{uri: product.imgURL}} style={CardStyle.image} />
        <View style={CardStyle.body}>
          <Text style={CardStyle.title}>{product.title}</Text>
          <Text style={CardStyle.text}>{product.description}</Text>
          <Text style={CardStyle.price}>{product.price}</Text>
          <Text style={CardStyle.stock}>{product.inStock ? "":"STOKTA YOK"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
