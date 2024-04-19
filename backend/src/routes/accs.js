const express = require('express')
const router  = express.Router()


const Account = require("../app/models/Account.js")

router.get('/',async(req,res)=>{
    try {
        const accs= await Account.find({})
        
        return res.json({
            accs:accs
        })
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async(req,res)=>{
    try {
        if(!req.body.email || !req.body.password){
            return res.status(400).send({
                message:"Nhap du thong tin de tao tai khoan"
            })

        }
        const newAcc= {
            email :req.body.email,
            password: req.body.password
        }
        const acc= await Account.create(newAcc)
        return res.status(201).send(acc)

    } catch (error) {
        console.log(error)
    }
})


module.exports  = router
