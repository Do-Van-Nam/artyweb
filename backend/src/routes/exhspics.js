const express = require('express')
const router = express.Router()

const Exhpic  = require('../app/models/Exhpic.js')

router.get('/', async (req,res)=>{
    try {
        const exhspics = await Exhpic.find({})
        return res.json({
            exhspics: exhspics
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports  = router
