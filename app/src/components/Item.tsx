import React, { useState } from 'react';
import { Property } from '../property/property';
import { Text, TouchableOpacity, View } from 'react-native';
import ImageCard from './Card';

type ItemCardProps = {
  property: Property;
};

const ItemCard: React.FC<ItemCardProps> = ({ property }) => {
  const [like, setLike] = useState(property.like);
  return (
    <View>
      <ImageCard img={property.img} stars={property.stars} />
      <View>
        <Text>{property.name}</Text>
        <Text>{property.address}</Text>
        <Text>{property.rooms}</Text>
        <Text>{property.bathrooms}</Text>
        <Text>{property.size}</Text>
        <Text>${property.price}</Text>
        <TouchableOpacity
          onPress={() => setLike(!like)}
        >
          <Text>{like ? 'Liked' : 'Like'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCard;
