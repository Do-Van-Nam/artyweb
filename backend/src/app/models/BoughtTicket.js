const mongoose= require('mongoose')
const Schema = mongoose.Schema

const BoughtTicket = new Schema({
    idartist: 
    {type: String ,unique:true },
    paid: {type:Boolean},
})


module.exports = mongoose.model('BoughtTicket', BoughtTicket)
