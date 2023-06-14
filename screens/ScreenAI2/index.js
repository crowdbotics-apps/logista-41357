import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const AppInfoScreen = () => {
  const handleLogin = () => {// Handle login logic here
  };

  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />
      <Text style={styles.title}>App Name</Text>
      <Text style={styles.description}>
        This is a brief description of the app and its features.
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.example.com/terms')}>
          Terms and Conditions
        </Text>
        <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.example.com/privacy')}>
          Privacy Policy
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  loginButton: {
    backgroundColor: '#4B7BEC',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18
  },
  linksContainer: {
    flexDirection: 'row'
  },
  linkText: {
    color: '#4B7BEC',
    textDecorationLine: 'underline',
    marginHorizontal: 10
  }
});
export default AppInfoScreen;