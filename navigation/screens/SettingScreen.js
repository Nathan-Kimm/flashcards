import * as React from 'react';
import { View, Text, Switch, StyleSheet} from 'react-native';
import{useColorScheme } from 'nativewind';


const SettingScreen = ({navigation})=>{
  const {colorScheme, toggleColorScheme} = useColorScheme();
  
  return(
    <View style="flex-1 jsutify-center items-center dark:bg-neutral-900">
      <Text
       style = {{fontSize: 26, fontWeight: 'bold'}}>Dark Mode</Text>
       <Switch value={colorscheme == 'dark'} onChange = {toggleColorScheme}/>
      
    </View>
  );
};
export default SettingScreen;