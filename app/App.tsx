import React from 'react';
import { SafeAreaView, StyleSheet, Platform, NativeModules } from 'react-native';
import data from './src/data/data.json';
import ItemsList from './src/components/List';

function App(): JSX.Element {
  const property = data
  return (
    <SafeAreaView style={styles.container}>
      <ItemsList data={property} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
