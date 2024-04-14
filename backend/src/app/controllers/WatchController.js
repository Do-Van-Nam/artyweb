
const Exhibition = require('../models/Exhibition')

class WatchController{
    
    index(req,res,next){
        async (req,res)=>{
            try {
                const exh= await Exhibition.find({})
                
                return res.json({
                    exhs:exh
                })
            } catch (error) {
                console.log(error)
            }


        }
            
    }

}
module.exports = new WatchController();

