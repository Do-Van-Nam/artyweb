const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.createConnection('mongodb://localhost:27017/exhpics',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connect exhpics successfully")
    } catch (error) {
        console.log("connect exhpics failed")
        console.log(error)
    }
}
module.exports = {connect}