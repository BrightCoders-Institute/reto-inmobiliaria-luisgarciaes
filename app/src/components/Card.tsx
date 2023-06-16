import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

type ImageCardProps = {
  img: string;
  stars: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ img, stars }) => {
  return (
    <ImageBackground source={{ uri: img }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 15, width: 25, borderRadius: 10, margin: 5 }}>
        <Text style={{ color: '#856D35', marginLeft: 1, fontSize: 12}}>{stars}</Text>
      </View>
    </ImageBackground>
  );
};

export default ImageCard;
