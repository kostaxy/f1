import 'react-native-gesture-handler'
import React from 'react';
import News from './src/screens/News/News';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drivers from './src/screens/Scoreboard/Drivers';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Scoreboard from './src/screens/Scoreboard/Scoreboard';

function App(): React.JSX.Element {

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="News"
          component={News}
          options={{ title: 'F1 News' }}
        />
        <Drawer.Screen name="Scoreboard" component={Scoreboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
