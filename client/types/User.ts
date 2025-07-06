export type User = {
  id: string
  email: string
  nationality: string
  location: string
  interests?: string[]
  languages?: string[]
  badges?: string[]
  privacySettings?: {
    profileVisibility: 'public' | 'group' | 'private'
  }
}
