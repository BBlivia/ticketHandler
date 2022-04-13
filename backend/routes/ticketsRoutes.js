const express = require('express');
const router =  express.Router();
const { getTicket, createTicket, updateTicket, deleteTicket } = require('../controllers/ticketsController');



router.route('/').get(getTicket).post(createTicket)
router.route('/:id').put(updateTicket).delete(deleteTicket)




/*

initial set up of routes

router.post('/', (req, res)=>{
    res.json({message: 'add ticket'})
 })

 router.put('/:id', (req, res)=>{
     res.json({message: `Update ticket ${req.params.id}`})
 })

 router.delete('/:id', (req, res)=>{
    res.json({message: `Delete ticket${req.params.id}`})
 })
*/



module.exports = router