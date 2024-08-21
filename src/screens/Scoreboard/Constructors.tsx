import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native';
import { fetchConstructors } from '../../api/api';
import Header from './Header';
import ConstructorItem from './ConstructorItem';


const Constructors = () => {
  const [constructors, setConstructors] = useState<any>(null)
  useEffect(() => {
    async function getConstructors() {
      try {
        const constructorsData = await fetchConstructors();

        if (constructorsData) {
          setConstructors(constructorsData)
        } else {
          setConstructors(null)
        }
      } catch (err) {
        console.log('Error occured when fetching constructors');
      }
    }
    getConstructors()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header itemInfo="Team" />
      <FlatList
        contentContainerStyle={{ gap: 8 }}
        data={constructors?.standings?.entries}
        renderItem={({ item }) =>
          <ConstructorItem item={item} />
        }
        keyExtractor={item => item.team.id}
      />
    </View>
  )
};

export default Constructors