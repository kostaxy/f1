import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Driver } from './Drivers';
import { styles } from '../../styles';

// Define the types for navigation and route
type RootStackParamList = {
  DriverInfo: { driver: Driver };
};

type DriverInfoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'DriverInfo'>;

type Props = {
  driver: Driver;
  navigation: DriverInfoScreenNavigationProp;
};

const DriverItem = ({ driver, navigation }: Props) => {
  return (

    <TouchableOpacity
      style={styles.scoreboardListItem}
      onPress={() => {
        navigation.navigate('DriverInfo', { driver });
      }}
    >
      <Text style={styles.rank}>{driver?.stats[0]?.value}</Text>
      <View style={styles.infoItem}>
        <Image
          style={styles.image}
          source={
            driver?.athlete?.headshot
              ? { uri: driver.athlete.headshot }
              : require('../../../../res/images/driveravatar.webp')
          } />
        <View style={styles.infoItemInfo}>
          <View style={styles.infoItemName}>
            <Image
              style={styles.flagImage}
              source={{
                uri: driver.athlete.flag.href
              }} />
            <Text style={styles.infoItemNameText}>
              {driver.athlete.displayName}
            </Text>
          </View>

          <View>
            <Text>
              {driver.athlete?.vehicles[0]?.team || "Formula 1 team"}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.points}>{driver.stats[1].value}</Text>
    </TouchableOpacity>
  )
}

export default DriverItem