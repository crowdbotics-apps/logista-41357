import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';

const SiteDetails = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Activity Log');
  const site = {
    name: 'Site Name',
    address: '123 Main St, City, State, 12345',
    contact: 'John Doe, (555) 123-4567',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };
  const supplies = [{
    id: '1',
    name: 'Supply 1'
  }, {
    id: '2',
    name: 'Supply 2'
  }, {
    id: '3',
    name: 'Supply 3'
  }];
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.siteName}>{site.name}</Text>
        <Text style={styles.siteInfo}>{site.address}</Text>
        <Text style={styles.siteInfo}>{site.contact}</Text>
        <TouchableOpacity style={styles.mapButton}>
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI9");
        }}><Text style={styles.mapButtonText}>Display on map</Text></Pressable>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.searchBar} onChangeText={setSearch} value={search} placeholder="Search" />
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, activeTab === 'Activity Log' && styles.activeTab]} onPress={() => setActiveTab('Activity Log')}>
          <Text style={styles.tabText}>Activity Log</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'Document Repository' && styles.activeTab]} onPress={() => setActiveTab('Document Repository')}>
          <Text style={styles.tabText}>Document Repository</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={supplies} renderItem={({
      item
    }) => <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.name}</Text>
          </View>} keyExtractor={item => item.id} />
      <View style={styles.notes}>
        <Text style={styles.notesTitle}>Notes:</Text>
        <Text style={styles.notesText}>{site.notes}</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  header: {
    marginTop: 40,
    marginBottom: 20
  },
  siteName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  siteInfo: {
    fontSize: 16,
    marginBottom: 5
  },
  mapButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  tab: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  activeTab: {
    backgroundColor: '#4CAF50'
  },
  tabText: {
    fontSize: 16
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  },
  listItemText: {
    fontSize: 16
  },
  notes: {
    marginTop: 20
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  notesText: {
    fontSize: 16
  }
});
export default SiteDetails;