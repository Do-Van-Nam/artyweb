const express = require('express')
const router  = express.Router()

const WatchController = require('../app/controllers/WatchController')
const Exhibition = require("../app/models/Exhibition.js")

router.get('/',async(req,res)=>{
    try {
        const exh= await Exhibition.find({})
        
        return res.json({
            exhs:exh
        })
    } catch (error) {
        console.log(error)
    }
})




module.exports  = router
