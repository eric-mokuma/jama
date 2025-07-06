import React from 'react'
import { View, Text, FlatList } from 'react-native'

const mockNotifications = [
  { id: '1', message: 'Your group join request was approved.' },
  { id: '2', message: 'New event: Kinshasa Dinner Night.' },
]

const NotificationsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
      <FlatList
        data={mockNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>{item.message}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default NotificationsScreen
