import React from 'react'
import { View, Text, FlatList, TextInput, Button } from 'react-native'

const mockMessages = [
  { id: '1', sender: 'Paul', text: 'Hello!' },
  { id: '2', sender: 'Marie', text: 'Hi Paul!' },
]

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Chat</Text>
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 4 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>{item.sender}:</Text>{' '}
              {item.text}
            </Text>
          </View>
        )}
      />
      <TextInput
        placeholder="Type a message..."
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Send" onPress={() => {}} />
    </View>
  )
}

export default ChatScreen
