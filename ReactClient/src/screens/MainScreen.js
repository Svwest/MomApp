


import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import { AuthContext } from "../context/AuthContext";

const stories = [
  {
    id: 1,
    name: 'Jane',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 2,
    name: 'John',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 3,
    name: 'Katie',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
  },
  {
    id: 4,
    name: 'Michael',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
  },
  {
    id: 5,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
  },
  {
    id: 6,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 7,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 8,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 9,
    name: 'Sarah',
    image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
  },
]

const StoryList = () => {

  return (
    <View style={styles.storyList}>
      <Text style={styles.storyListText}>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <View style={styles.storyContainer} key={story.id}>
            <Image style={styles.storyImage} source={{ uri: story.image }} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const MainScreen = ({navigation}) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John',
      text: 'Hey, how are you?',
      senderType: 'user',
      avatar: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      image: 'https://www.bootdey.com/image/580x580/00BFFF/000000',
    },
    {
      id: 2,
      sender: 'Jane',
      text: "I'm doing well, thanks for asking. How about you?",
      senderType: 'other',
      avatar: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
      image: 'https://www.bootdey.com/image/580x580/FF00FF/000000',
    },
    {
      id: 3,
      sender: 'John',
      text: "I'm doing well too. Do you want to grab a coffee later?",
      senderType: 'user',
      avatar: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
      image: 'https://www.bootdey.com/image/580x580/008000/000000',
    },
  ])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.avatar} source={{ uri: item.avatar }} />
          <Text style={styles.sender}>{item.sender}</Text>
        </View>
        <View style={styles.cardBody}>
          {item.image && <Image style={styles.cardImage} source={{ uri: item.image }} />}
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StoryList />
      <FlatList data={messages} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  storyList: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  storyListText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor:'white'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardBody: {
    flex: 1,
  },
  sender: {
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  cardText: {
    marginTop: 10,
  },
})

export default MainScreen

                        