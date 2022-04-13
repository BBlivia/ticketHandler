const mongooose = require('mongoose')

const TicketSchema = new mongooose.Schema({
        user:{
            type: mongooose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        subject:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        severity: {
            type: String,
            required: true
        },
        assignedTo:{
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "Open"
        },
        date: {
            type: Date,
            default: Date.now
        }

}
)


module.exports = mongooose.model('Ticket', TicketSchema)