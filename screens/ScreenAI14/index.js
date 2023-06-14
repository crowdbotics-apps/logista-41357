import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const ItemListScreen = () => {
  const [items, setItems] = useState([{
    id: '1',
    name: 'Item 1',
    category: 'Category 1',
    manufacturer: 'Manufacturer 1',
    expirationDate: '2023-01-01'
  }, {
    id: '2',
    name: 'Item 2',
    category: 'Category 2',
    manufacturer: 'Manufacturer 2',
    expirationDate: '2023-02-01'
  }]);

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>
          {item.category} - {item.manufacturer}
        </Text>
        <Text style={styles.itemDetails}>Expires: {item.expirationDate}</Text>
      </View>
      <View style={styles.itemActions}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id} />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add New</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDetails: {
    fontSize: 14,
    color: '#777'
  },
  itemActions: {
    flexDirection: 'row'
  },
  editButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 5
  },
  deleteButton: {
    backgroundColor: '#F44336',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10
  },
  addButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
export default ItemListScreen;