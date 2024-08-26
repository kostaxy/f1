import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface HeaderProps {
  itemInfo: string;
}

const Header: React.FC<HeaderProps> = ({ itemInfo }) => {
  return (
    <View style={styles.scoreHeader}>
      <Text style={styles.rankHeader}>#</Text>
      <Text style={styles.infoItemHeader}>{itemInfo}</Text>
      <Text style={styles.pointsHeader}>Points</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scoreHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#af0034',
    padding: 5,
    width: '100%',
  },
  rankHeader: {
    color: '#fff',
    width: '15%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  infoItemHeader: {
    color: '#fff',
    width: '60%',
    justifyContent: 'center',
    paddingStart: 15,
  },
  pointsHeader: {
    color: '#fff',
    width: '25%',
    justifyContent: 'center',
    textAlign: 'center',
  }
})

export default Header