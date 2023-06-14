import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. By accessing and using our services, you agree to be bound by these Terms and Conditions.

  2. Changes to Terms and Conditions
  We reserve the right to modify these Terms and Conditions at any time. Your continued use of our services constitutes your acceptance of any changes.

  3. Privacy Policy
  Our Privacy Policy, which is incorporated into these Terms and Conditions, governs your use of our services.

  4. User Conduct
  You agree not to use our services for any unlawful or prohibited purpose.

  5. Intellectual Property
  All content, including but not limited to text, images, and code, is the property of our application and is protected by copyright, trademark, and other intellectual property laws.

  6. Limitation of Liability
  We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of our services.

  7. Indemnification
  You agree to indemnify and hold us harmless from any claims, damages, or expenses, including reasonable attorneys' fees, arising out of your use of our services.

  8. Governing Law
  These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered.

  9. Severability
  If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

  10. Entire Agreement
  These Terms and Conditions constitute the entire agreement between you and us with respect to your use of our services and supersede all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.
  `;
  return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.content}>{termsAndConditions}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollView: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    fontSize: 16,
    lineHeight: 24
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default TermsAndConditionsScreen;