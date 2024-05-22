const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Exhibition = new Schema({
    name: {type: String},
    location: {type:String},
    thumbnail: {type: String},
    time:{type:String},
    opentime:{type:String},
    idartist:{type:String},
    cost:{type:String},
})


module.exports = mongoose.model('Exhibition', Exhibition)
