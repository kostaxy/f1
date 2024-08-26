import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { state, navigation } = props;
  const currentRouteName = state.routeNames[state.index];

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      {state.routes.map((route, index) => (
        <DrawerItem
          key={route.key}
          label={route.name}
          onPress={() => navigation.navigate(route.name)}
          labelStyle={[
            styles.label,
            route.name === currentRouteName && styles.activeLabel,
          ]}
        />
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#fff', // Red background for the drawer content
  },
  label: {
    color: '#000', // White color for the labels
  },
  activeLabel: {
    fontWeight: 'bold', // Bold text for the active label
    color: '#ff232b'
  },
});

export default CustomDrawerContent;