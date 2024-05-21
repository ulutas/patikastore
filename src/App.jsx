import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Card from './Components/Card';
import products from './products.json';


function App() {
  return (
    <SafeAreaView style={myStyles.container}>
      <Text style={myStyles.header_text}>PATIKASTORE</Text>
      <TextInput placeholder="Ara..." style={myStyles.search_text} />
      <FlatList
        data={products}
        renderItem={({item}) => <Card product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_text: {
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  search_text: {
    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height / 20,
    paddingLeft: 5,
    margin: 5,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
  },
});

export default App;
