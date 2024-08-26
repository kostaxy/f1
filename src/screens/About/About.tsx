import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.app}>F1 mobile app</Text>
      <View style={styles.creatorTextContainer}>
        <Text style={styles.text}>This mobile application was created by </Text>
        <Text style={styles.creator}>@kostaxy</Text>
      </View>
      <Text style={styles.text}>The main goals were training to work with React Native.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 50
  },
  text: {
    color: '#000'
  },
  creatorTextContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  creator: {
    fontStyle: 'italic',
    color: '#ff232b'
  },
  app: {
    fontWeight: 'bold',
    color: '#ff232b'
  }
})

export default About
