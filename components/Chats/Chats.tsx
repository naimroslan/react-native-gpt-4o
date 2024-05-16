import { useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import uuid from 'react-native-uuid';
import { getCompletion } from "../../utils/OpenAI";
import Markdown from "react-native-markdown-display";
import Input from "./Input";

export default function Chats() {
  const [messages, setMessages] = useState([
    { id: uuid.v4(), role: 'system', content: "Hey there! Welcome to Aurora — your new chat buddy powered by the latest GPT-4o model, crafted by Naim Roslan. Let's chat"}
  ])

  const handleResponse = async (userMessage: string) => {
    console.log('User Message:', userMessage)
    const updatedMessages = [
      ...messages,
      { id: uuid.v4(), role: 'user', content: userMessage }
    ]
    setMessages(updatedMessages)

    try {
      const completion = await getCompletion(updatedMessages)
      setMessages((prevMessages: any) => [
        ...prevMessages,
        { id: uuid.v4(), role: 'assistant', content: completion }
      ])
    } catch (error) {
      console.error('Error: ', error)
    }
  }

  const renderItem = ({ item }:any) => {
    return (
      <View style={[styles.messageContainer, item.role === 'user' ? styles.rightMessage : styles.leftMessage]}>
        <View style={[styles.messageBubble, item.role === 'user' ? styles.rightBubble : styles.leftBubble ]}>
          <Markdown style={{ 
            body: { color: 'black', fontSize: 14}
            }}>
              {item.content}
          </Markdown>
        </View>
      </View>
    )
  }

  return(
    <View style={styles.chatContainer}>
      <View style={styles.container}>
        {/* <ScrollView> */}
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
          />
        {/* </ScrollView> */}
      </View>
      <Input handleResponse={handleResponse} />
    </View>
  )
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#000",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: "85%"
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  messageBubble: {
    padding: 14,
    marginVertical: 10,
    marginHorizontal: 14,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    maxWidth: '80%', // Limit message width
  },
  rightMessage: {
    alignSelf: 'flex-end', // Align messages to the right
  },
  leftMessage: {
    alignSelf: 'flex-start'
  },
  rightBubble: {
    backgroundColor: '#E7E8D1', // Background color for right-aligned messages
  },
  leftBubble: {
    backgroundColor: '#fff'
  },
  messageText: {
    fontSize: 16,
    // fontFamily: "Inter-Medium"
  },
})