
const watchRouter = require('./watch')
const accsRouter = require('./accs')
const exhpicsRouter = require('./exhspics')
const aiRouter = require('./ai')
const boughtticketRouter = require('./boughtticket')
 

function route(app) { 
 
    app.use('/watch', watchRouter)
    app.use('/accs', accsRouter)
    app.post('/accs', accsRouter)
    app.use('/exhspics', exhpicsRouter)
    app.post('/generate',aiRouter)
    app.use('/boughtticket',boughtticketRouter)
    app.post('/boughtticket',boughtticketRouter)
    app.put('/boughtticket/:idartist',boughtticketRouter)
    app.delete('/boughtticket/:idartist',boughtticketRouter)

}

module.exports = route
