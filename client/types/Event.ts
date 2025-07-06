export type Event = {
  id: string
  title: string
  location: string
  date: string
  type: 'social' | 'career' | 'cultural'
  groupId?: string
  attendees: string[] // user IDs
}
