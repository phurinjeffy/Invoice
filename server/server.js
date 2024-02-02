require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const invoiceRoutes = require('./routes/invoices')
const itemRoutes = require('./routes/items')
const partnerRoutes = require('./routes/partners')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/invoices', invoiceRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/partners', partnerRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })