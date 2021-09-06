class Human {
  constructor(name, dogs = []) {
    this.name = name
    this.dogs = dogs
    this.events = []
    this.likesDislikes = ''
  }

  addEvent(event) {
    this.events.push(event)
  }

  attendEvent(event) {
    event.acceptedBy.push(this)
  }

  rejectEvent(event) {
    event.rejectedBy.push(this)
  }

  giveFeedback(vet, vetRating) {
    vet.vetRating.push(vetRating)
  }

  addLD(likesDislikes) {
    this.likesDislikes = likesDislikes
  }
}

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

module.exports = Human

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
