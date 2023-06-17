import React, { useState } from 'react';
import { Property } from '../property/property';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ImageCard from './Card';

type ItemCardProps = {
  property: Property;
};

const ItemCard: React.FC<ItemCardProps> = ({ property }) => {
  const [like, setLike] = useState(property.like);
  return (
    <View style={styles.container}>
      <ImageCard img={property.img} stars={property.stars} />
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyName}>{property.name}</Text>
        <Text style={styles.propertyAddress}>{property.address}</Text>
        <Text style={styles.propertyDetails}>{property.rooms} rooms</Text>
        <Text style={styles.propertyDetails}>{property.bathrooms} bathrooms</Text>
        <Text style={styles.propertyDetails}>Size: {property.size}</Text>
        <Text style={styles.propertyPrice}>${property.price}</Text>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setLike(!like)}
        >
          <Text style={styles.likeButtonText}>{like ? 'Liked' : 'Like'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  propertyInfo: {
    padding: 16,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  propertyAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  propertyDetails: {
    fontSize: 14,
    marginBottom: 4,
  },
  propertyPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  likeButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    alignItems: 'center',
  },
  likeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItemCard;
