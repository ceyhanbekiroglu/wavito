const year = new Date();
class Human {
  constructor(name, dogs = []) {
    this.name = name;
    this.dogs = dogs;
    this.events = [];
  }
  addEvent(event) {
    this.events.push(event);
  }
  attendEvent(event) {
    event.acceptedBy.push(this);
  }
  get human() {
    return `# //${this.dogName}// --> ${this.name}`; //change the this.dogName
  }
}
module.exports = Human;

// giveReview(review) { // need to go into the Human
//     review.gaveBy.push(this)
//}
//   get age() {
//     return `### ${this.dogName} is ${
//       year.getFullYear() - this.birthYear
//     } year old.`;
//   }

//Comments
// addDog must be added.
//
