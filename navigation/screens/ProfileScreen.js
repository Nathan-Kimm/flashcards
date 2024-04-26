
import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function ProfileScreen({navigation}){
  

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
