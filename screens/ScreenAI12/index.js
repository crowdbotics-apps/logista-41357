import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Button } from 'react-native';
const usersData = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890',
  role: 'Admin'
}, {
  id: '2',
  name: 'Jane Smith',
  email: 'jane@example.com',
  phone: '234-567-8901',
  role: 'User'
} // Add more users here
];

const UserListScreen = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(usersData);
  const [filter, setFilter] = useState('');

  const filterUsers = role => {
    setFilter(role);

    if (role === '') {
      setUsers(usersData);
    } else {
      setUsers(usersData.filter(user => user.role === role));
    }
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.item}>
      <Image style={styles.avatar} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <TextInput style={styles.search} onChangeText={setSearch} value={search} placeholder="Search users..." />
      <View style={styles.filterButtons}>
        <Button title="All" onPress={() => filterUsers('')} />
        <Button title="Admin" onPress={() => filterUsers('Admin')} />
        <Button title="User" onPress={() => filterUsers('User')} />
      </View>
      <FlatList data={users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  search: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    marginLeft: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 14,
    color: 'gray'
  },
  phone: {
    fontSize: 14,
    color: 'gray'
  },
  role: {
    fontSize: 14,
    fontStyle: 'italic'
  }
});
export default UserListScreen;