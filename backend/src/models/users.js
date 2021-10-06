const mongoose = require('mongoose')

const autopopulate = require('mongoose-autopopulate')
// const autopopulate = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dog',
      autopopulate: { maxDepth: 1 },
    },
  ],
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      autopopulate: { maxDepth: 1 },
    },
  ],
  like: String,
  dislike: String,
})
class users {
  async addDog(dog) {
    this.dogs.push(dog)
    await this.save()
  }

  async addEvent(event) {
    this.events.push(event)
    await this.save()
  }

  async attendEvent(event) {
    event.acceptedBy.push(this)
    await this.save()
  }

  async giveFeedback(rating, vet) {
    const range = [1, 2, 3, 4, 5]
    if (!range.includes(rating)) return 'Rating must ve between 1-5'

    vet.ratings.push(rating)
    await this.save()

    return `Rating '${rating}' is accepted!! Thank you for your contribution :)`
  }

  async addLike(dog, like) {
    dog.likes.push(like)
    await this.save()
  }

  async addDislike(dog, dislike) {
    dog.dislikes.push(dislike)
    await this.save()
  }
}

userSchema.loadClass(users)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('users', userSchema)

// addLikes(likes) {
//   likes.likes.push(likes)
// }
// addDog() {
//   this.dog.push(dog)
// }

// addDog() {

// }

// get human() {
//   return `# //${this.dogName}// --> ${this.name}` // change the this.dogName
// }

// module.exports = Human

// giveReview(review) { // need to go into the Human
//     review.gaveBy.push(this)
//
//   get age() {
//     return `### ${this.dogName} is ${
//       year.getFullYear() - this.birthYear
//     } year old.`;
//   }

// Comments
// addDog must be added.
//
// set rating() {
//     if (this.ratings > 5 || !this.ratings < 0) return 'Not a valid rating'
//     return this.ratings.reduce((a, b) => a + b) / this.retings.length
//   }
