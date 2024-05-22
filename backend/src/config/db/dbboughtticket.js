const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.createConnection('mongodb://localhost:27017/boughttickets',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connect boughtticket successfully")
    } catch (error) {
        console.log("connect boughtticket failed")
        console.log(error)
    }
}
module.exports = {connect}