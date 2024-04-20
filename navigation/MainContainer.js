// Import necessary dependencies and components
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import SetScreen from './screens/SetScreen';
import CardScreen from './screens/CardScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const homeName = "Home";
const setName = "Set";
const settingName = "Settings";
const cardName = "Card";
const profileName = 'Profile';

const homeNavigationName = "Home Navigation";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeNavigaton() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            // Determine the appropriate icon name based on the current route
            if(rn === homeName)
              iconName = focused ? 'home' : 'home-outline';
            else if(rn === setName)
              iconName = focused ? 'scan' : 'scan-outline';
            else if(rn === cardName)
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            else if(rn === settingName)
              iconName = focused ? 'settings' : 'settings-outline';
            else if(rn === profileName)
              iconName = focused ? 'person-circle' : 'person-circle-outline';

            // Render the Ionicons component with the appropriate icon name
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#004B8D',
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={setName} component={SetScreen} />
        <Tab.Screen name={cardName} component={CardScreen} />
        <Tab.Screen name={settingName} component={SettingScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerMode: false }}>
        <Stack.Screen name = { homeNavigationName } component = { HomeNavigaton } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
