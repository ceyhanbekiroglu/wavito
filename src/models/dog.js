/* eslint-disable no-unused-vars */
const year = new Date()

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
// const human = require('./human')

const dogSchema = new mongoose.Schema({
  dogName: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  human: {
    type: String,
    required: true,
  },
})

class Dog {
  //   get profile() {
  //     return `
  // ${this.name} ${this.dogName.bold} - ${this.breed.bold} - ${year.getFullYear() - this.birthYear} year old.
  // My human is ${this.human.bold}.
  // `
  //     await this.save(profile)
  //   }
  // }
}

dogSchema.loadClass(Dog)
dogSchema.plugin(autopopulate)
// Bio: ${this.likes} and ${this.dislikes}

module.exports = mongoose.model('Dog', dogSchema)
