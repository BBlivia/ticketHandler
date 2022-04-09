//bring in modles
//gets tickets
// private access
const asyncHandler = require("express-async-handler")


    const getTicket = asyncHandler(async (req, res) =>{
       
        res.status(200).json({message: 'Get tickets'})
        
    })

    const createTicket = asyncHandler(async (req, res) =>{
         if(!req.body.text){
                 res.status(400)
             throw new Error('Please add in text field')
            
            }
            res.status(200).json({message: 'add ticket'})
    
     
        
    })

    const updateTicket = asyncHandler(async (req, res)=>{
      try {
        res.status(200).json({message: `Update ticket ${req.params.id}`})
      } catch (error) {
        console.log('error')
      }
    })

    const deleteTicket = asyncHandler(async (req, res)=>{
      
            res.status(200).json({message: `Delete ticket${req.params.id}`})
        
    })

    module.exports ={
        getTicket,
        createTicket,
        updateTicket,
        deleteTicket
    }


// if(!req.body.text){
//     res.status(400)
// throw new Error('Please add in text field')

// }
// res.status(200).json({message: 'add ticket'})