import React from 'react'
import News from './News'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { openUrl } from '../../utils/openUrl'



const NewsItem = ({ news }: { news: News }) => {
  return (
    <TouchableOpacity
      style={styles.newsContainer}
      onPress={() => openUrl(news.link)}
    >
      <Image
        style={styles.image}
        source={
          news.imageUrl
            ? { uri: news.imageUrl }
            : require('../../res/images/news.webp')
        } />
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={styles.headline}>
          {news.headline}
        </Text>
        <Text
          style={styles.text}
          numberOfLines={3}
        >
          {news.description}
        </Text>
      </View>
    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
  newsContainer: {
    display: 'flex',
    width: '95%',
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    height: 120,
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100
  },
  textContainer: {
    display: 'flex',
    maxWidth: '70%'
  },
  headline: {
    fontWeight: 'bold',
    color: '#000'
  },
  text: {
    color: '#000'
  }
})

export default NewsItem