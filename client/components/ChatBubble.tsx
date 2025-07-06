import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type ChatBubbleProps = {
  sender: string
  text: string
  isOwnMessage?: boolean
}

const ChatBubble = ({ sender, text, isOwnMessage }: ChatBubbleProps) => (
  <View style={[styles.bubble, isOwnMessage && styles.ownBubble]}>
    <Text style={styles.sender}>{sender}:</Text>
    <Text>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  ownBubble: {
    backgroundColor: '#cce5ff',
    alignSelf: 'flex-end',
  },
  sender: {
    fontWeight: 'bold',
  },
})

export default ChatBubble
