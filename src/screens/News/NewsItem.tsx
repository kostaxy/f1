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
        source={{
          uri: news.imageUrl,
        }} />
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={styles.headline}>
          {news.headline}
        </Text>
        <Text
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
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    height: 100,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: 80,
    height: 80
  },
  textContainer: {
    display: 'flex',
    maxWidth: '75%',
  },
  headline: {
    fontWeight: 'bold'
  }
})

export default NewsItem