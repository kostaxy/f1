import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fetchDrivers } from '../../../../api/api';
import { FlatList } from 'react-native-gesture-handler';
import DriverItem from './DriverItem';
import Header from '../../Header';

type StandingsResponse = {
  standings: Standings;
};

type Standings = {
  id: string;
  name: string;
  displayName: string;
  season: number;
  seasonType: number;
  entries: Driver[];
};

export type Driver = {
  athlete: Athlete;
  stats: Stat[];
};

type Athlete = {
  id: string;
  uid: string;
  displayName: string;
  abbreviation: string;
  name: string;
  shortName: string;
  flag: Flag;
  guid: string;
  alternateId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  link: string;
  birthPlace: BirthPlace;
  slug: string;
  headshot: string;
  vehicles: Vehicle[];
  linked: boolean;
  active: boolean;
  status: Status;
};

export type Stat = {
  name: string;
  displayName: string;
  shortDisplayName: string;
  shortName: string;
  description: string;
  abbreviation: string;
  type: string;
  id?: string;
  played?: boolean;
  value: number;
  displayValue: string;
  topFinish?: number;
};

type Flag = {
  href: string;
  alt: string;
  rel: string[];
};

type BirthPlace = {
  city?: string;
  state?: string;
};

type Vehicle = {
  number: string;
  manufacturer: string;
  chassis: string;
  engine: string;
  tire: string;
  team: string;
};

type Status = {
  id: string;
  name: string;
  type: string;
  abbreviation: string;
};

const Drivers = ({ navigation }: any) => {
  const [drivers, setDrivers] = useState<StandingsResponse | null>(null);

  useEffect(() => {
    async function getDrivers() {
      try {
        const driversData = await fetchDrivers();

        if (driversData) {
          setDrivers(driversData as StandingsResponse);
        } else {
          setDrivers(null);
        }
      } catch (err) {
        console.log('Error occurred when fetching drivers', err);
      }
    }
    getDrivers();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header itemInfo="Driver" />
      <FlatList
        contentContainerStyle={{ gap: 8 }}
        data={drivers?.standings?.entries}
        renderItem={({ item }) => (
          <DriverItem driver={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.athlete.id}
      />
    </View>
  );
};

export default Drivers;