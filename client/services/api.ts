// API service for backend communication
import axios from 'axios'

const API_URL = 'http://localhost:5000/api' // Update as needed

export const fetchGroups = async () => {
  return axios.get(`${API_URL}/groups`)
}

export const fetchEvents = async () => {
  return axios.get(`${API_URL}/events`)
}

// Add more API functions as needed
