import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const DriverStatItem = ({ stat }: any) => {
  return (
    <View style={styles.stat}>
      <Text>{stat.displayName} </Text>
      <Text>{stat.value} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  stat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default DriverStatItem