import React from 'react'
import { styles } from '../styles'
import { Text, TouchableOpacity, View } from 'react-native'

interface Team {
  id: string;
  name: string;
  displayName: string;
  abbreviation: string;
  shortDisplayName: string;
  color: string;
}

interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  type: string;
  value: number;
  displayValue: string;
  id?: string;
  played?: boolean;
}

interface Constructor {
  team: Team;
  stats: Stat[];
}

const ConstructorItem: React.FC<{ item: Constructor }> = ({ item }) => {
  return (
    <View
      style={styles.scoreboardListItem}
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
    </View>
  )
}

export default ConstructorItem