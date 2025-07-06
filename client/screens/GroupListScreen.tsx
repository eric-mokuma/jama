import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

const mockGroups = [
  { id: '1', name: 'DRC Wellington Family', members: 50 },
  { id: '2', name: 'Congolese Students NZ', members: 20 },
]

const GroupListScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Groups</Text>
      <FlatList
        data={mockGroups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>
              {item.name} ({item.members} members)
            </Text>
            <Button
              title="View"
              onPress={() =>
                navigation.navigate('GroupDetailScreen', { groupId: item.id })
              }
            />
          </View>
        )}
      />
      <Button
        title="Create Group"
        onPress={() => navigation.navigate('CreateGroupScreen')}
      />
    </View>
  )
}

export default GroupListScreen
