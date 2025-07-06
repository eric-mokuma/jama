import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

const mockEvents = [
  {
    id: '1',
    title: 'Kinshasa Dinner Night',
    location: 'Wellington',
    type: 'Social',
  },
  { id: '2', title: 'Career Networking', location: 'Auckland', type: 'Career' },
]

const EventsScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Events</Text>
      <FlatList
        data={mockEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>
              {item.title} - {item.location} ({item.type})
            </Text>
            <Button title="RSVP" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  )
}

export default EventsScreen
