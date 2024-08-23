import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { fetchNews, fetchSchedule } from '../../api/api'
import ScheduleItem from './ScheduleItem';

export type RaceEvent = {
  startDate: Date;
  endDate: Date;
  featuredAthletes: string;
  status: {
    id: string;
    state: string;
    detail: string;
  };
  completed: boolean;
  gPrx: string;
  crct: string;
  evLink: string;
  isPostponedOrCanceled: boolean;
  winner?: string; // Optional field for winner
  broadcasts?: Broadcast[]; // Optional field for broadcasts
  time?: string; // Optional field for time
}

type Broadcast = {
  name: string;
  type: string;
  market: string;
  link: string;
  logo: string;
}

const Schedule = () => {

  const [schedule, setSchedule] = useState<RaceEvent[]>([]);

  useEffect(() => {
    async function getSchedule() {
      try {
        const scheduleData = await fetchSchedule();
        if (scheduleData) {
          const data = Object.values(!scheduleData).map((el) => {
            return {
              ...el[0],
              startDate: new Date(el[0].startDate),
              endDate: new Date(el[0].endDate)
            }
          })
          setSchedule([...data])
        } else {
          setSchedule([])
        }

      } catch (err) {
        console.log('Error occured when fetching schedule');
      }
    }
    getSchedule()
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={schedule}
        renderItem={({ item }) => <ScheduleItem raceEvent={item} />}
        keyExtractor={item => item.endDate.toString()}
      />
    </SafeAreaView>
  )
}

export default Schedule
