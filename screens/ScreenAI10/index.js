import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
const usersData = [{
  id: 1,
  username: 'user1',
  email: 'user1@example.com',
  fullName: 'User One',
  phone: '123-456-7890',
  role: 'Admin'
}, {
  id: 2,
  username: 'user2',
  email: 'user2@example.com',
  fullName: 'User Two',
  phone: '234-567-8901',
  role: 'User'
}];

const UserScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const filteredUsers = users.filter(user => user.role.includes(filter) && user.username.includes(search));
  return <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchInput} placeholder="Search" onChangeText={text => setSearch(text)} />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.buttonText}>Filter by Role</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={filteredUsers} renderItem={({
      item
    }) => <View style={styles.userItem}>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.fullName}>{item.fullName}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteUser(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>} keyExtractor={item => item.id.toString()} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI11");
        }}><Text style={styles.buttonText}>Create a new account</Text></Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: '60%'
  },
  filterButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  userInfo: {
    flex: 1
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16
  },
  fullName: {
    fontSize: 16
  },
  phone: {
    fontSize: 16
  },
  role: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  deleteButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    padding: 10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  createButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10
  },
  editButton: {
    backgroundColor: '#FFC107',
    borderRadius: 5,
    padding: 10
  },
  saveButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default UserScreen;