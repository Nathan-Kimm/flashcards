import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {styles.title}>Home</Text> 
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
});
