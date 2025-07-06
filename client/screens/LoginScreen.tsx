import React from 'react'
import { View, Text, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// LoginScreen: Entry point for login/signup or guest access
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<any>
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to JAMA</Text>
      <Button title="Login" onPress={() => navigation.navigate('HomeScreen')} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button
        title="Continue as Guest"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  )
}

export default LoginScreen
