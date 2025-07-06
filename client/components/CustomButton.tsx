import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type CustomButtonProps = {
  title: string
  onPress: () => void
}

const CustomButton = ({ title, onPress }: CustomButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default CustomButton
