import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import GroupListScreen from '../screens/GroupListScreen'
import CreateGroupScreen from '../screens/CreateGroupScreen'
import ChatScreen from '../screens/ChatScreen'
import EventsScreen from '../screens/EventsScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import ReportScreen from '../screens/ReportScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="GroupListScreen" component={GroupListScreen} />
    <Stack.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
    <Stack.Screen name="ChatScreen" component={ChatScreen} />
    <Stack.Screen name="EventsScreen" component={EventsScreen} />
    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
    <Stack.Screen name="ReportScreen" component={ReportScreen} />
  </Stack.Navigator>
)

export default AppNavigator
