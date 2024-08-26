import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const DriverStatItem = ({ stat }: any) => {
  return (
    <View style={styles.stat}>
      <Text style={styles.text}>{stat.displayName} </Text>
      <Text style={styles.text}>{stat.value} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  stat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderColor: '#0000006f',
    borderTopWidth: 1
  },
  text: {
    color: '#000'
  }
})

export default DriverStatItem