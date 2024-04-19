
const watchRouter = require('./watch')
const accsRouter = require('./accs')


function route(app) { 

    app.use('/watch', watchRouter)
    app.use('/accs', accsRouter)
    app.post('/accs', accsRouter)

}

module.exports = route
