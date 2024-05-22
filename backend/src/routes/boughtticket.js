const express = require('express')
const router  = express.Router()


const BoughtTicket = require("../app/models/BoughtTicket.js")

router.get('/',async(req,res)=>{
    try {
        const boughttickets= await BoughtTicket.find({})
        
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
            paid: req.body.paid
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
router.put('/:idartist',async(req,res)=>{
    try {
        const idartist=req.params.idartist
        const updatedBoughtTicket= {
            idartist :req.params.idartist,
            paid: req.body.paid
        }
        const boughtticket= await BoughtTicket.findOneAndUpdate({idartist:idartist},updatedBoughtTicket,{new : true})
        if(!updatedBoughtTicket){
        return res.status(404).send("BoughtTicket not found")

        }
        return res.status(201).send(boughtticket)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.delete('/:idartist', async(req,res)=>{
    const idartist = req.params.idartist
    try {
        const deletedTicket = await BoughtTicket.findOneAndDelete({idartist:idartist})
        if(!deletedTicket){
            res.status(404).send('Ticket not found')
        }
        res.json(deletedTicket)
    } catch (error) {
        res.status(500).send(error.message)
    }
})



module.exports  = router
