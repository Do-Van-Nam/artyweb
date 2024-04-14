
const watchRouter = require('./watch')


function route(app) {

    app.use('/watch', watchRouter)

}

module.exports = route
