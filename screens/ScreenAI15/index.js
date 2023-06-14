import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
const data = [{
  id: '1',
  name: 'Item 1',
  description: 'Description 1',
  sku: 'SKU001',
  quantity: 10,
  location: 'Aisle 1',
  status: 'In Stock'
}, {
  id: '2',
  name: 'Item 2',
  description: 'Description 2',
  sku: 'SKU002',
  quantity: 2,
  location: 'Aisle 2',
  status: 'Low Stock'
}, {
  id: '3',
  name: 'Item 3',
  description: 'Description 3',
  sku: 'SKU003',
  quantity: 0,
  location: 'Aisle 3',
  status: 'Out of Stock'
}];

const ItemCard = ({
  item
}) => <View style={styles.itemCard}>
    <Image source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.itemImage} />
    <View style={styles.itemInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemSku}>SKU: {item.sku}</Text>
      <Text style={styles.itemLocation}>Location: {item.location}</Text>
      <Text style={styles.itemStatus}>{item.status}</Text>
    </View>
  </View>;

const InventoryScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Inventory Overview</Text>
      <FlatList data={data} renderItem={({
      item
    }) => <ItemCard item={item} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  itemInfo: {
    marginLeft: 10
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDescription: {
    fontSize: 14,
    color: '#777'
  },
  itemSku: {
    fontSize: 12,
    color: '#999'
  },
  itemLocation: {
    fontSize: 12,
    color: '#999'
  },
  itemStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  }
});
export default InventoryScreen;