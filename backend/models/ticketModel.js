const mongooose = require('mongoose')

const TicketSchema = new mongooose.Schema({
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

}, {
    timestamps:true
}
)


module.exports = mongooose.model('Ticket', TicketSchema)