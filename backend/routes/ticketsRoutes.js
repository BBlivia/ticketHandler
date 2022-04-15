const express = require('express');
const router =  express.Router();
const { getAllTicket, getAssigned,  createTicket, updateTicket, deleteTicket } = require('../controllers/ticketsController');
const { protect } = require('../middleware/authMiddleware')


router.route('/').get( protect, getAllTicket).post( protect, createTicket)
router.route('/:id').put(protect, updateTicket).delete(protect, deleteTicket)
router.route('/mytickets').get(protect, getAssigned)



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