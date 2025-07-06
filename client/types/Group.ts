export type Group = {
  id: string
  name: string
  description?: string
  city: string
  country: string
  type: 'cultural' | 'professional' | 'hobby'
  members: string[] // user IDs
  admins: string[] // user IDs
  events?: string[] // event IDs
}
