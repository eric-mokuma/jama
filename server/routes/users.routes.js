const express = require('express')
const router = express.Router()

// GET all users
router.get('/', (req, res) => {
  res.json([]) // Placeholder
})

// POST create user
router.post('/', (req, res) => {
  res.json({}) // Placeholder
})

module.exports = router
