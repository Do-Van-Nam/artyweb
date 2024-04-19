const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/exhibitions',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connect exhs successfully")
    } catch (error) {
        console.log("connect exhs failed")
        console.log(error)
        
    }
}
module.exports = {connect}