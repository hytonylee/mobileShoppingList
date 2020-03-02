import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

const randomId = () => {
  return Math.random()
    .toString(36)
    .substring(7);
};

const App = () => {
  const [items, setItems] = useState([
    {id: randomId(), text: 'Milk'},
    {id: randomId(), text: 'Egg'},
    {id: randomId(), text: 'Juice'},
    {id: randomId(), text: 'Bread'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
