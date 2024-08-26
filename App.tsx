import 'react-native-gesture-handler'
import React from 'react';
import News from './src/screens/News/News';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drivers from './src/screens/Scoreboard/Drivers/AllDrivers/Drivers';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Scoreboard from './src/screens/Scoreboard/Scoreboard';
import Schedule from './src/screens/Schedule/Schedule';
import { View } from 'react-native';
import CustomDrawerContent from './src/screens/CustomDrawer/CustomDrawerContent';
import About from './src/screens/About/About';

function App(): React.JSX.Element {

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use the custom drawer component
      >
        <Drawer.Screen
          name="News"
          component={News}
          options={{
            title: 'F1 News',
            headerStyle: {
              backgroundColor: '#ff232b',
            },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="Scoreboard"
          component={Scoreboard}
          options={{
            headerStyle: {
              backgroundColor: '#ff232b',
            },
            headerTintColor: '#fff',
          }} />
        <Drawer.Screen
          name="Schedule"
          component={Schedule}
          options={{
            headerStyle: {
              backgroundColor: '#ff232b',
            },
            headerTintColor: '#fff',
          }} />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: '#ff232b',
            },
            headerTintColor: '#fff',
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
