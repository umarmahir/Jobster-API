require('dotenv').config()
const connectDB = require('./db/connect')
const Job = require('./models/Job')
const mock_data = require('./mock-data.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Job.create(mock_data)
    console.log('Success!')
  } catch (error) {
    console.log(error)
  }
}

start()
