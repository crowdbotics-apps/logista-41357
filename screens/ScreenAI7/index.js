import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Button } from 'react-native';

const Tab = ({
  title,
  isActive,
  onPress
}) => <TouchableOpacity style={[styles.tab, isActive && styles.activeTab]} onPress={onPress}>
    <Text style={[styles.tabText, isActive && styles.activeTabText]}>{title}</Text>
  </TouchableOpacity>;

const App = () => {
  const [activeTab, setActiveTab] = useState('Site overview');
  return <SafeAreaView style={styles.container}>
      <View style={styles.tabsContainer}>
        <Tab title="Site overview" isActive={activeTab === 'Site overview'} onPress={() => setActiveTab('Site overview')} />
        <Tab title="Users accounts" isActive={activeTab === 'Users accounts'} onPress={() => setActiveTab('Users accounts')} />
        <Tab title="Partner records" isActive={activeTab === 'Partner records'} onPress={() => setActiveTab('Partner records')} />
        <Tab title="Consumable and Asset Records" isActive={activeTab === 'Consumable and Asset Records'} onPress={() => setActiveTab('Consumable and Asset Records')} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{activeTab}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="New account" onPress={() => alert('New account')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  tab: {
    paddingVertical: 12
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6200EE'
  },
  tabText: {
    fontSize: 16,
    color: '#757575'
  },
  activeTabText: {
    color: '#6200EE'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 24,
    color: '#212121'
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16
  }
});
export default App;