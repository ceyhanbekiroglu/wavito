const year = new Date()
class Dog {
  constructor(dogName, breed, birthYear, human) {
    this.dogName = dogName
    this.breed = breed
    this.birthYear = birthYear
    this.human = human
  }

  get profile() {
    return `
${this.dogName.bold} - ${this.breed.bold} - ${year.getFullYear() - this.birthYear} year old.
Bio: ${this.likesDislikes.italic}
My human is ${this.human.bold}.
`
  }
}

module.exports = Dog
