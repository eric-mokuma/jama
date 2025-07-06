const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Import routes
const userRoutes = require('./routes/users.routes')
const groupRoutes = require('./routes/groups.routes')
const eventRoutes = require('./routes/events.routes')
const reportRoutes = require('./routes/reports.routes')

app.use('/api/users', userRoutes)
app.use('/api/groups', groupRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/reports', reportRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`JAMA server running on port ${PORT}`)
})
