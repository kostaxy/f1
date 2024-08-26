import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Drivers from './Drivers/AllDrivers/Drivers';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriverInfo from './Drivers/DriverInfo/DriverInfo';
import Constructors from './Constructors/Constructors';


const Stack = createNativeStackNavigator();
const DriversRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Drivers" component={Drivers}></Stack.Screen>
      <Stack.Screen name="DriverInfo" component={DriverInfo} ></Stack.Screen>
    </Stack.Navigator>
  )
}

const ConstructorsRoute = () => (<Constructors />)

const renderScene = SceneMap({
  drivers: DriversRoute,
  teams: ConstructorsRoute,
});

const Scoreboard = () => {


  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'drivers', title: 'Drivers' },
    { key: 'teams', title: 'Teams' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        labelStyle={styles.label}
        activeColor="#ff232b"
      />}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Background color of the tab bar
  },
  indicator: {
    backgroundColor: '#ff232b', // Red color for the underline
  },
  label: {
    color: '#000', // Default black color for tab labels
  },
});

export default Scoreboard