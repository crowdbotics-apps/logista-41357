import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
const records = [{
  id: '1',
  name: 'Item 1',
  quantity: 10,
  location: 'Shelf A',
  status: 'In Stock'
}, {
  id: '2',
  name: 'Item 2',
  quantity: 5,
  location: 'Shelf B',
  status: 'Low Stock'
}, {
  id: '3',
  name: 'Item 3',
  quantity: 0,
  location: 'Shelf C',
  status: 'Out of Stock'
}];

const RecordScreen = () => {
  const [search, setSearch] = useState('');

  const deleteRecord = id => {
    console.log('Delete record with id:', id);
  };

  const renderItem = ({
    item
  }) => <View style={styles.record}>
      <Text style={styles.recordText}>{item.name}</Text>
      <Text style={styles.recordText}>{item.quantity}</Text>
      <Text style={styles.recordText}>{item.location}</Text>
      <Text style={styles.recordText}>{item.status}</Text>
      <TouchableOpacity onPress={() => deleteRecord(item.id)}>
        <Image style={styles.deleteIcon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </TouchableOpacity>
    </View>;

  return <View style={styles.container}>
      <TextInput style={styles.searchBar} onChangeText={setSearch} value={search} placeholder="Search" />
      <FlatList data={records} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10
  },
  record: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  recordText: {
    fontSize: 16
  },
  deleteIcon: {
    width: 20,
    height: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default RecordScreen;