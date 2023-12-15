import express from 'express'
import { getNotes, getNote, createNote } from './database.js'

const app = express()
app.use(express.json())



app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  console.log('server is running 8080')
})