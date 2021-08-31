class Dog {
    constructor(name, age, breed) {
        this.name = name
        this.age = age //birth year is better
        this.breed = breed
        this.event = [] // this.events
        // this.review = []
    }
    greet(dog) {
        console.log(`Hello ${dog.name} this is ${this.name}. I am ${this.age} year old ${this.breed}.`)
    }
    addEvent(event) { // need to go into the Human
        this.event.push(event)
    }

    attendEvent(event) { // need to go into the Human
        event.acceptedBy.push(this)
    }
    // giveReview(review) { // need to go into the Human
    //     review.gaveBy.push(this)
    //}
}

class Human {
    constructor(name) {
        this.name = name
        this.event = []
    }
}

class Event {
    constructor(eventName) { //name will be enough
        this.eventName = eventName
        this.acceptedBy = []
    }
}

// class Review {
//     constructor(vet) {
//         this.vet = vet
//         this.reviewedBy = []
//     }
// }

const Wave = new Dog('Wave', 1, 'Labrabor Retriever')
const Kira = new Dog('Kira', 2, 'Border Collie')
const Jack = new Dog('Jack', 5, 'Jack Russel')

const eventAfternoon = new Event('afternoon walk')
Kira.addEvent(eventAfternoon)
Wave.attendEvent(eventAfternoon)
Jack.attendEvent(eventAfternoon)

console.log(Kira.greet(Wave))
console.log(Kira, Kira.event[0].acceptedBy)

const eventWeekend = new Event('weekend trip')
Wave.addEvent(eventWeekend)
Kira.attendEvent(eventWeekend)

console.log(Wave, Wave.event[0].acceptedBy)

// const reviewWave = new Review ('5 stars')
// Wave.giveReview(reviewWave)

// const reviewKira = new Review ('4 stars')
// Kira.giveReview(reviewKira)

// const reviewJack = new Review ('4 stars')
// Jack.giveReview(reviewJack)

// console.log()


//COMMENTS:
//multibable dog owner what will be??
// dogs cant add events they need the owners to do it. ?? 
// Ceyhan will attend or create event and there must be an array with which dogs he has.
//greet --> meet is better for the dogs
// human class must be added!! only 1 human right now 2 nd is future features....

