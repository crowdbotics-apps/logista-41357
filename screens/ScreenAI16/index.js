import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
const notifications = [{
  id: '1',
  title: 'New message',
  description: 'You have a new message from John Doe',
  time: '2 mins ago'
}, {
  id: '2',
  title: 'Friend request',
  description: 'Jane Smith sent you a friend request',
  time: '10 mins ago'
}, {
  id: '3',
  title: 'Event reminder',
  description: 'Your event starts in 30 minutes',
  time: '15 mins ago'
}];

const NotificationItem = ({
  title,
  description,
  time
}) => <View style={styles.notificationItem}>
    <Image source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.notificationImage} />
    <View style={styles.notificationTextContainer}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
      <Text style={styles.notificationTime}>{time}</Text>
    </View>
  </View>;

const NotificationListScreen = () => {
  return <View style={styles.container}>
      <FlatList data={notifications} renderItem={({
      item
    }) => <NotificationItem title={item.title} description={item.description} time={item.time} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  notificationTextContainer: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  notificationDescription: {
    fontSize: 14,
    color: '#777'
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5
  }
});
export default NotificationListScreen;