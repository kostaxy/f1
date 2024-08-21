import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

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

export default Header