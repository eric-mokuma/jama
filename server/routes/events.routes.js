const express = require('express')
const router = express.Router()

// GET all events
router.get('/', (req, res) => {
  res.json([]) // Placeholder
})

// POST create event
router.post('/', (req, res) => {
  res.json({}) // Placeholder
})

module.exports = router
