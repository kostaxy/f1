import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import NewsItem from './NewsItem'
import { fetchNews } from '../../api/api'

type News = {
  id: string,
  headline: string,
  description: string,
  link: string,
  imageUrl: string
}

const News = () => {

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function getNews() {
      try {
        const newsData = await fetchNews();
        const loadedNews = newsData?.map((el: any) => {
          return {
            id: el?.dataSourceIdentifier,
            headline: el?.headline,
            description: el?.description,
            link: el?.link,
            imageUrl: el?.images[0]?.url
          }
        })
        if (loadedNews) {
          setNews([...loadedNews])
        } else {
          setNews([])
        }
      } catch (err) {
        console.log('Error occured when fetching news');
      }
    }
    getNews()
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={news}
        renderItem={({ item }) => <NewsItem news={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default News