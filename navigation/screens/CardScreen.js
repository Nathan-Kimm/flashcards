import * as React from 'react';
import { View, Text } from 'react-native';

export default function CardScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{fontSize: 26, fontWeight: 'bold'}}>Cards!</Text>
    </View>
  );
};