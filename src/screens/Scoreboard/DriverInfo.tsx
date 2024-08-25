import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Driver } from './Drivers';
import DriverStatItem from './DriverStatItem';



const DriverInfo = ({ navigation, route }: any) => {
  const driver: Driver = route.params?.driver;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Drivers')}
        style={styles.backButton}
      >
        <Image
          source={require('../../res/images/back.png')}
          style={styles.backButtonImg}
        />
      </TouchableOpacity>
      <View style={styles.driverCard}>
        {
          driver?.athlete?.headshot
            ?
            <Image
              style={styles.image}
              source={{
                uri: driver.athlete.headshot,
              }} />
            :
            <Image
              style={styles.image}
              source={
                require('../../res/images/driveravatar.webp')}
            />
        }
        <View>
          <Text>{`Name: ${driver.athlete.name}`}</Text>
          <Text>{`Birth date: ${new Date(driver.athlete.dateOfBirth).toLocaleDateString()}`}</Text>
          <Text>{`Nationality: ${driver.athlete.flag.alt}`}</Text>
          <Text>{`Team: ${driver.athlete?.vehicles[0]?.team}`}</Text>
          <Text>{`Engine: ${driver.athlete?.vehicles[0]?.engine}`}</Text>
          <Text>{`Rank: ${driver.stats[0]?.value}`}</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {
          driver.stats
            .filter((track: any, ind: number) => track.played && ind > 1)
            .map((stat: any) =>
              <DriverStatItem key={stat.abbreviation} stat={stat} />
            )
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    padding: 10,
    width: 50,
  },
  backButtonImg: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  image: {
    width: 200,
    height: 150
  },
  driverCard: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default DriverInfo;