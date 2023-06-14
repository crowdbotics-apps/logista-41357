import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const NotificationScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [group, setGroup] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return <View style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="Notification Title" onChangeText={setTitle} value={title} />
      <TextInput style={styles.textArea} placeholder="Notification Content" onChangeText={setContent} value={content} multiline />
      <Picker selectedValue={group} style={styles.picker} onValueChange={itemValue => setGroup(itemValue)}>
        <Picker.Item label="Select Group" value="" />
        <Picker.Item label="Group 1" value="group1" />
        <Picker.Item label="Group 2" value="group2" />
        <Picker.Item label="Group 3" value="group3" />
      </Picker>
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.datePickerText}>Select Date & Time</Text>
      </TouchableOpacity>
      {showDatePicker && <DateTimePicker value={date} mode="datetime" display="default" onChange={onDateChange} />}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  input: {
    width: '80%',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  textArea: {
    width: '80%',
    height: 100,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top'
  },
  picker: {
    width: '80%',
    marginBottom: 10
  },
  datePickerButton: {
    width: '80%',
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  datePickerText: {
    color: '#fff',
    textAlign: 'center'
  },
  sendButton: {
    width: '80%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10
  },
  sendButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
export default NotificationScreen;