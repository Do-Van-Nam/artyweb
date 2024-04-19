const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.createConnection('mongodb://localhost:27017/accounts',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connect accounts successfully")
    } catch (error) {
        console.log("connect accounts failed")
        console.log(error)
    }
}
module.exports = {connect}