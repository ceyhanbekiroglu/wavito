const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const vetSchema = new mongoose.Schema({
  vetName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ratings',
    },
  ],
})

class Vet {}

vetSchema.loadClass(Vet)
vetSchema.plugin(autopopulate)

module.exports = mongoose.model('Vet', vetSchema)
