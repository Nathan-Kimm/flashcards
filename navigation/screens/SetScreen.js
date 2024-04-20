import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect } from 'react';

export default function SetScreen() {

  return (
    <View style = {styles.container}>
      <Text style = {{fontSize: 26, fontWeight: 'bold'}}>Sets</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    borderStyle: "dashed",
    width: 240,
    height: 160,
    
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
