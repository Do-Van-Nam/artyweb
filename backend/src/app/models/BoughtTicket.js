const mongoose= require('mongoose')
const Schema = mongoose.Schema

const BoughtTicket = new Schema({
    userid: 
    {type: String },
    idartist: 
    {type: String   },
    paid: {type:Boolean},
})
BoughtTicket.index({ userid: 1, idartist: 1 }, { unique: true });

module.exports = mongoose.model('BoughtTicket', BoughtTicket)
