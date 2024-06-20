const express = require('express')
const router  = express.Router()


const BoughtTicket = require("../app/models/BoughtTicket.js")

router.get('/:userid',async(req,res)=>{
    const userid = req.params.userid
    try {
        const boughttickets= await BoughtTicket.find({userid:userid})
        
        return res.json({
            boughttickets:boughttickets
        })
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async(req,res)=>{
    try {
        const newBoughtTicket= {
            idartist :req.body.idartist,
            paid: req.body.paid,
            userid : req.body.userid,
        }
        const boughtticket= await BoughtTicket.create(newBoughtTicket)
        return res.status(201).send(boughtticket)
    } catch (error) {
        if (error.code === 11000) { 
            return res.status(400).json({ error: 'idartist already exists' });
          }
          console.log(error);
          return res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.put('/:idticket',async(req,res)=>{
    try {
        const idticket=req.params.idticket
        const updatedBoughtTicket= {
            idartist :req.body.idartist,
            paid: req.body.paid,
            userid :req.body.userid,
        }
        const boughtticket= await BoughtTicket.findOneAndUpdate({_id:idticket},updatedBoughtTicket,{new : true})
        if(!updatedBoughtTicket){
        return res.status(404).send("BoughtTicket not found")

        }
        return res.status(201).send(boughtticket)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.delete('/:idticket', async(req,res)=>{
    const idticket = req.params.idticket
    try {
        const deletedTicket = await BoughtTicket.findOneAndDelete({_id:idticket})
        if(!deletedTicket){
            res.status(404).send('Ticket not found')
        }
        res.json(deletedTicket)
    } catch (error) {
        res.status(500).send(error.message)
    }
})



module.exports  = router
