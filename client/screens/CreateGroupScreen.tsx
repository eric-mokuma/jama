import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const CreateGroupScreen = ({ navigation }: any) => {
  const [groupName, setGroupName] = useState('')

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Create a New Group
      </Text>
      <TextInput
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 8 }}
      />
      <Button
        title="Create"
        onPress={() => {
          /* handle group creation */ navigation.goBack()
        }}
      />
    </View>
  )
}

export default CreateGroupScreen
