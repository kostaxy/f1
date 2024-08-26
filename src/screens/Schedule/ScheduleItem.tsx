import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RaceEvent } from './Schedule'


const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];


const ScheduleItem = ({ raceEvent }: { raceEvent: RaceEvent }) => {
  return (
    <View style={styles.item}>
      <View style={styles.date}>
        <Text style={[styles.text, styles.textDate]}>{`${raceEvent.endDate.getDate()} ${month[raceEvent.endDate.getMonth()]}`}</Text>
        <Text style={[styles.text, styles.textDate]}>{raceEvent.endDate.getFullYear()}</Text>
      </View>
      <View style={styles.circle}>
        {raceEvent.completed && <View style={styles.dot} />}
        <View style={[styles.circleBeforeAfter, styles.circleBefore]} />
        <View style={[styles.circleBeforeAfter, styles.circleAfter]} />
      </View>
      <View style={styles.grandPrix}>
        <Text style={styles.text}>{raceEvent.gPrx}</Text>
      </View>
      {raceEvent.completed &&
        <View style={styles.winner}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../res/images/trophy.png')} // Local image path
              style={styles.trophy}
            />
            <Text >Winner</Text>

          </View>
          <Text style={styles.textWinner}>{raceEvent.winner}</Text>
        </View>
      }


    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    height: 50,
    alignItems: 'center',
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10, // Half of the height/width to make it a circle
    borderWidth: 3,
    borderColor: '#ff232b',
    backgroundColor: 'transparent', // Optional: Set background color if needed
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -5 }, { translateY: -5 }], // Center the dot
    height: 10,
    width: 10,
    borderRadius: 5, // Half of the height/width to make it a circle
    backgroundColor: '#ff232b',
  },
  circleBeforeAfter: {
    position: 'absolute',
    backgroundColor: '#ff232b',
    width: 2,
  },
  circleBefore: {
    height: 18,
    top: -18,
    left: '50%',
    transform: [{ translateX: -1 }], // Translate by half of the width
  },
  circleAfter: {
    height: 19,
    bottom: -19,
    left: '50%',
    transform: [{ translateX: -1 }], // Translate by half of the width
  },
  grandPrix: {
    width: 200,
  },
  winner: {
    width: 150,
    marginLeft: 'auto',
    paddingEnd: 20,
    display: 'flex',
    alignItems: 'flex-end',
    color: '#000'
  },
  textWinner: {
    fontSize: 12,
    color: '#000'
  },
  text: {
    color: '#000'
  },
  textDate: {
    textAlign: 'right'
  },
  trophy: {
    width: 12,
    height: 12,
    marginRight: 5
  },
  date: {
    width: 60,
  }
});
export default ScheduleItem