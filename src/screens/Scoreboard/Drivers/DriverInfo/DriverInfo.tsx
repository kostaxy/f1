import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Driver } from '../AllDrivers/Drivers';
import DriverStatItem from './DriverStatItem';

const DriverInfo = ({ navigation, route }: any) => {
  const driver: Driver = route.params?.driver;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          require('../../../../res/images/bg.jpg')}
        resizeMode="cover"
        style={styles.imageBG}
      >
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Drivers')}
            style={styles.backButton}
          >
            <Image
              source={require('../../../../res/images/back.png')}
              style={styles.backButtonImg}
            />
          </TouchableOpacity>
          <ImageBackground
            source={
              driver?.athlete?.headshot
                ? { uri: driver.athlete.headshot }
                : require('../../../../res/images/driveravatar.webp')
            }
            style={styles.imageBackground}
            imageStyle={styles.image}
          >
            <LinearGradient
              colors={['transparent', 'rgba(171, 0, 0, 0.8)']}
              style={styles.gradient}
            />
            <View style={styles.overlayCard}>
              <Text style={styles.driverRank}>{driver.stats[0]?.value}.</Text>
              <Text style={styles.driverName}>{driver.athlete.name}</Text>
            </View>
          </ImageBackground>
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Name</Text>
              <Text style={styles.cardText}>{driver.athlete.name}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Birth date</Text>
              <Text style={styles.cardText}>{new Date(driver.athlete.dateOfBirth).toLocaleDateString('ru-RU')}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Country</Text>
              <Text style={styles.cardText}>{driver.athlete.flag.alt}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Team</Text>
              <Text style={styles.cardText}>{driver.athlete?.vehicles[0]?.team}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardText}>Engine</Text>
              <Text style={styles.cardText}>{driver.athlete?.vehicles[0]?.engine}</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={{ alignSelf: 'center', color: '#ff232b', fontWeight: 'bold' }}>STATS</Text>
            <View style={[styles.cardRow, { marginBottom: 10 }]}>
              <Text style={[styles.cardText, { fontWeight: 'bold' }]}>Grand prix</Text>
              <Text style={[styles.cardText, { fontWeight: 'bold' }]}> Pts</Text>
            </View>
            {
              driver.stats
                .filter((track: any, ind: number) => track.played && ind > 1)
                .map((stat: any) =>
                  <DriverStatItem key={stat.abbreviation} stat={stat} />
                )
            }
          </View>

        </ScrollView>
      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imageBackground: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  overlayCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
  },
  card: {
    display: 'flex',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardText: {
    color: '#000',
    fontSize: 15
  },
  driverName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16
  },
  driverRankContainer: {
    width: 26,
    height: 26,
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  driverRank: {
    color: '#ff232b',
    fontWeight: 'bold',
    fontSize: 16
  },
  imageBG: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default DriverInfo;