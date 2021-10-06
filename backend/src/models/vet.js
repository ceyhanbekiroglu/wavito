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

// docker run -p 3000:3000 -p 35729:35729  -e MONGODB_USERNAME=root -e MONGODB_PASSWORD=TWy8ExCkXCxd3jdj -e MONGODB_DATABASE=Cluster0 -v/home/ceyhanbekiroglu/wavito/src:/src cicd102
