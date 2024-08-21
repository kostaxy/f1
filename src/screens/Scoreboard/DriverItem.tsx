import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'


const DriverItem = ({ item }: any) => {
  return (

    <TouchableOpacity
      style={styles.scoreboardListItem}
      onPress={() => { console.log(`Pressed driver ${item.athlete.id}`) }}
    >
      <Text style={styles.rank}>{item?.stats[0]?.value}</Text>
      <View style={styles.infoItem}>
        {
          item?.athlete?.headshot
            ?
            <Image
              style={styles.image}
              source={{
                uri: item.athlete.headshot,
              }} />
            :
            <Image
              style={styles.image}
              source={
                require('../../res/images/driveravatar.webp')}
            />
        }
        <View style={styles.infoItemInfo}>
          <View style={styles.infoItemName}>
            <Image
              style={styles.flagImage}
              source={{
                uri: item.athlete.flag.href
              }} />
            <Text style={styles.infoItemNameText}>
              {item.athlete.displayName}
            </Text>
          </View>

          <View>
            <Text>
              {item.athlete.team || "Formula 1 team"}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.points}>{item.stats[1].value}</Text>
    </TouchableOpacity>
  )
}

export default DriverItem