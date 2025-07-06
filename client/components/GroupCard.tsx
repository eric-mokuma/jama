import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type GroupCardProps = {
  name: string
  members: number
  description?: string
}

const GroupCard = ({ name, members, description }: GroupCardProps) => (
  <View style={styles.card}>
    <Text style={styles.title}>{name}</Text>
    <Text>{members} members</Text>
    {description && <Text>{description}</Text>}
  </View>
)

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default GroupCard
