//bring in modles
//gets tickets
// private access

module.exports ={
    getTicket: async(req, res) =>{
        try {
            
            res.status(200).json({message: 'Get tickets'})
        } catch (error) {
            console.log('error')
        }
    },

    createTicket: async (req, res) =>{
    
        if(!req.body.text)
        res.status(400)
        throw new Error('Please add in text field')
       
       
    },

    updateTicket: async (req, res)=>{
      try {
        res.status(200).json({message: `Update ticket ${req.params.id}`})
      } catch (error) {
        console.log('error')
      }
    },

    deleteTicket: async(req, res)=>{
      
            res.status(200).json({message: `Delete ticket${req.params.id}`})
        
    }
}

