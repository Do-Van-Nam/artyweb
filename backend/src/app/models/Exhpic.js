const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Exhpic = new Schema ({
    idartist: {type: String},
    picname: {type: String},
    picsrc: {type: String},
    picdescription: {type: String},
})

module.exports = mongoose.model('Exhpic', Exhpic)