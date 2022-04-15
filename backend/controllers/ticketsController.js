//bring in modles
//gets tickets
// private access
const asyncHandler = require("express-async-handler")
const Ticket = require('../models/ticketModel')
const User = require("../models/userModel")

    const getAllTicket = asyncHandler(async (req, res) =>{
       const tickets = await Ticket.find()
      
        res.status(200).json({tickets})
        
    })

    const getAssigned = asyncHandler(async(req, res)=>{
      
        const theTickets = await Ticket.find({user: req.user.id})

      res.status(200).json({theTickets})
      
      
    })
    

   

    const createTicket = asyncHandler(async (req, res) =>{
         if(!req.body){
                 res.status(400)
             throw new Error('Please add in text field')
            
            }
            const ticket = await Ticket.create({
              user: req.user.id,
              subject: req.body.subject,
              description: req.body.description,
              severity: req.body.severity,
              assignedTo: req.body.assignedTo,
              status: req.body.status
            })

            res.status(200).json({ticket})
        
    })

    const updateTicket = asyncHandler(async (req, res)=>{
      try {
        const ticket = await Ticket.findById(req.params.id)
        if(!ticket){
          res.status(400)
          throw new Error('ticket not found')
        }

        const user = await User.findById(req.user.id)
          //check for user
        if(!user){
          res.status(401)
          throw new Error('you have no tickets')
        }
        
        //logged in user matches goal user
        if(ticket.user.toString() !== user.id){
          res.status(401)
          throw new Error ('user not found')
        }

        const updatedTicket = await Ticket.findByIdAndUpdate(
          req.params.id, req.body,
          {
            status: 'Closed'
          }
        
        )
        res.status(200).json({updatedTicket})
      } catch (error) {
        console.log('error')
      }
    })

    const deleteTicket = asyncHandler(async (req, res)=>{
      try {
      const ticket = await Ticket.findById(req.params.id)
        if(!ticket){
          res.status(400)
          throw new Error('ticket not found')
        }
       await ticket.deleteOne()
        
       const user = await User.findById(req.user.id)
       //check for user
     if(!user){
       res.status(401)
       throw new Error('you have no tickets')
     }
     
     //logged in user matches goal user
     if(ticket.user.toString() !== user.id){
       res.status(401)
       throw new Error ('user not found')
     }

        res.status(200).json({id: req.params.id}) // for front end later on
      } catch (error) {
        console.log('error')
      }
      
        
    })

    module.exports ={
        getAllTicket,
        getAssigned,
        createTicket,
        updateTicket,
        deleteTicket
      
    }


// if(!req.body.text){
//     res.status(400)
// throw new Error('Please add in text field')

// }
// res.status(200).json({message: 'add ticket'})