import React from 'react'
import { styles } from './styles'
import { Text, TouchableOpacity, View } from 'react-native'


const ConstructorItem = ({ item }: any) => {
  return (
    <TouchableOpacity
      style={styles.scoreboardListItem}
      onPress={() => { console.log(`Pressed constructor ${item.team.id}`) }}
    >
      <Text style={styles.rank}>{item?.stats[0]?.value}</Text>
      <View style={styles.infoItem}>
        <View style={styles.infoItemInfo}>
          <View style={styles.infoItemName}>
            <Text style={styles.infoItemNameText}>
              {item.team.name}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.points}>{item.stats[1].value}</Text>
    </TouchableOpacity>
  )
}

export default ConstructorItem