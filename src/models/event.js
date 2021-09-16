const mongoose = require('mongoose')
// const autopopulate = require('mongoose-autopopulate')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  acceptedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      // autopopulate: true,
    },
  ],
})

class Event {}

eventSchema.loadClass(Event)
// eventSchema.plugin(autopopulate)

module.exports = mongoose.model('Event', eventSchema)
