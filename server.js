const express = require('express')
const app = express()
const rowdy = require('rowdy-logger') //for rowdy-logger
const routesReport = rowdy.begin(app)//for rowdy-logger
app.use(express.json())//allow for use of req.body
app.use(require('cors')())
//listen on port 3000
app.listen(3000, () => {
    console.log('the server is listening!')
      routesReport.print()
  })
  
//routes

const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const listRoutes = require('./routes/listRoutes');

app.use('/user', userRoutes);
app.use('/movies', movieRoutes);
app.use('/list', listRoutes);