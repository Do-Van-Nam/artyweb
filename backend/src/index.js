const express = require('express')
const { engine } = require('express-handlebars')
const cors = require('cors')

const morgan = require('morgan')
const path = require('path')
const dbexhs = require('./config/db/dbexhs')
const dbaccs = require('./config/db/dbaccs')
const dbexhspics = require('./config/db/dbexhspics')
const dbboughttickets = require('./config/db/dbboughtticket')
// connect to DB

dbexhs.connect()
dbaccs.connect()
dbexhspics.connect()
dbboughttickets.connect()

const app = express()
const port = 5713

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//http logger
app.use(morgan('combined'))

//template engine
// app.engine('.hbs', engine({
//   extname:'.hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname,'/resources/views'));
 

app.use(express.static(path.join(__dirname, 'public')))

// ROUTE init
const route = require('./routes')
route(app)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})