import * as React from 'react';
import { View, Text, Switch, StyleSheet} from 'react-native';
import{useColorScheme } from 'nativewind';

const SettingScreen = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme(); // Ensure correct hook name
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Dark Mode</Text>
      <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Set your desired background color for the container
  },
});

export default SettingScreen;