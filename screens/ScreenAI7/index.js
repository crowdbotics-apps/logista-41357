import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Button, TextInput, FlatList, Image } from "react-native";

const Tab = ({
  title,
  isActive,
  onPress
}) => <TouchableOpacity style={[styles.tab, isActive && styles.activeTab]} onPress={onPress}>
    <Pressable>
      <Text style={[styles.tabText, isActive && styles.activeTabText]}>
        {title}
      </Text>
    </Pressable>
  </TouchableOpacity>;

const SiteItem = ({
  name,
  location,
  onPress
}) => <TouchableOpacity style={styles.siteItem} onPress={onPress}>
    <Pressable>
      <Text style={styles.siteName}>{name}</Text>
    </Pressable>
    <Pressable>
      <Text style={styles.siteLocation}>{location}</Text>
    </Pressable>
  </TouchableOpacity>;

const App = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Site overview");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    location: "",
    name: "",
    status: ""
  });
  const sites = [{
    id: 1,
    name: "Site 1",
    location: "Location 1",
    status: "operational"
  }, {
    id: 2,
    name: "Site 2",
    location: "Location 2",
    status: "critical"
  }, {
    id: 3,
    name: "Site 3",
    location: "Location 3",
    status: "pending"
  }];
  return <SafeAreaView style={styles.container}>
      <View style={styles.tabsContainer}>
        <Tab title="Site overview" isActive={activeTab === "Site overview"} onPress={() => setActiveTab("Site overview")} />
        <Tab title="Users accounts" isActive={activeTab === "Users accounts"} onPress={() => setActiveTab("Users accounts")} />
        <Tab title="Partner records" isActive={activeTab === "Partner records"} onPress={() => setActiveTab("Partner records")} />
        <Tab title="Consumable and Asset Records" isActive={activeTab === "Consumable and Asset Records"} onPress={() => setActiveTab("Consumable and Asset Records")} />
      </View>
      {activeTab === "Site overview" && <View style={styles.siteOverviewContainer}>
          <TextInput style={styles.searchBar} onChangeText={setSearch} value={search} placeholder="Search" />
          <View style={styles.filtersContainer}>
            <TextInput style={styles.filterInput} onChangeText={text => setFilter({ ...filter,
          location: text
        })} value={filter.location} placeholder="Location" />
            <TextInput style={styles.filterInput} onChangeText={text => setFilter({ ...filter,
          name: text
        })} value={filter.name} placeholder="Name" />
            <TextInput style={styles.filterInput} onChangeText={text => setFilter({ ...filter,
          status: text
        })} value={filter.status} placeholder="Status" />
          </View>
          <FlatList data={sites} renderItem={({
        item
      }) => <SiteItem name={item.name} location={item.location} onPress={() => alert(`Clicked on ${item.name}`)} />} keyExtractor={item => item.id.toString()} />
          <View style={styles.paginationContainer}>
            <Button title="Previous" onPress={() => alert("Previous page")} />
            <Button title="Next" onPress={() => alert("Next page")} />
          </View>
          <TouchableOpacity style={styles.notificationIcon} onPress={() => alert("Notification clicked")}>
            <Image source={require("./path/to/notification/icon.png")} style={styles.iconImage} />
          </TouchableOpacity>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI16");
      }}><Text style={styles.fbyDFDdn}>{"Notification"}</Text></Pressable></View>}
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI17");
    }}><View style={styles.buttonContainer}>
        <Button title="Create notification" onPress={() => alert("New account")} />
      </View></Pressable>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  tab: {
    paddingVertical: 12
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#6200EE"
  },
  tabText: {
    fontSize: 16,
    color: "#757575"
  },
  activeTabText: {
    color: "#6200EE"
  },
  siteOverviewContainer: {
    flex: 1,
    paddingHorizontal: 16,
    width: 1436,
    height: 797
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },
  filterInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    padding: 8,
    flex: 1,
    marginRight: 8
  },
  siteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  siteName: {
    fontSize: 16,
    color: "#212121"
  },
  siteLocation: {
    fontSize: 14,
    color: "#757575"
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  notificationIcon: {
    position: "absolute",
    top: 8,
    right: 16
  },
  iconImage: {
    width: 24,
    height: 24
  },
  fbyDFDdn: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default App;