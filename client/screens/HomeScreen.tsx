import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>JAMA Home</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('ProfileScreen')}
      />
      <Button
        title="Search Community"
        onPress={() => navigation.navigate('SearchScreen')}
      />
      <Button title="Map" onPress={() => navigation.navigate('MapScreen')} />
      <Button
        title="Groups"
        onPress={() => navigation.navigate('GroupListScreen')}
      />
      <Button
        title="Events"
        onPress={() => navigation.navigate('EventsScreen')}
      />
      <Button title="Chat" onPress={() => navigation.navigate('ChatScreen')} />
    </ScrollView>
  )
}

export default HomeScreen
