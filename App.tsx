import React from 'react';
import News from './src/screens/News/News';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drivers from './src/screens/Drivers/Drivers';

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={News}
          options={{ title: 'F1 News' }}
        />
        <Stack.Screen name="Drivers" component={Drivers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
