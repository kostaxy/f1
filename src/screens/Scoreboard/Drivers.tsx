import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { fetchDrivers } from '../../api/api';
import { FlatList } from 'react-native-gesture-handler';
import DriverItem from './DriverItem';
import Header from './Header';

type Props = {}
const Drivers = () => {
  const [drivers, setDrivers] = useState<any>([])
  useEffect(() => {
    async function getDrivers() {
      try {
        const driversData = await fetchDrivers();

        if (driversData) {
          setDrivers([driversData[0], driversData[1]])
        } else {
          setDrivers([])
        }
      } catch (err) {
        console.log('Error occured when fetching drivers');
      }
    }
    getDrivers()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header itemInfo="Driver" />
      <FlatList
        contentContainerStyle={{ gap: 8 }}
        data={drivers[0]?.standings?.entries}
        renderItem={({ item }) =>
          <DriverItem item={item} />
        }
        keyExtractor={item => item.athlete.id}
      />
    </View>
  )
};

export default Drivers