import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const ReportScreen = () => {
  const [report, setReport] = useState('')

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Report an Issue</Text>
      <TextInput
        placeholder="Describe the issue..."
        value={report}
        onChangeText={setReport}
        style={{ borderWidth: 1, width: 250, marginVertical: 10, padding: 8 }}
        multiline
      />
      <Button
        title="Submit Report"
        onPress={() => {
          /* handle report submission */
        }}
      />
    </View>
  )
}

export default ReportScreen
