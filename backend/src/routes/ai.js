const express = require('express')
const router  = express.Router()


router.post('/',async(req,res)=>{
    const {prompt} = req.body
    try {
        const response = await axios.post('http://localhost:8000/generate',{prompt})
        const data  = response.data
        res.json({response: data.response})
    } catch (error) {
        console.log(error)
    }
})

module.exports  = router