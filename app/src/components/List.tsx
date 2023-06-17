import React from 'react';
import { Property } from '../property/property';
import { FlatList } from 'react-native';
import Item from './Item';

type ItemListProps = {
  data: Property[];
};

const List: React.FC<ItemListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item property={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default List;
