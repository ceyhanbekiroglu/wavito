class Dog {
    constructor(name, age, breed) {
        this.name = name
        this.age = age //birth year is better
        this.breed = breed
        this.events = [] // this.events --> DONE
        // this.review = []
    }
    greet(dog) {
        console.log(`Hello ${dog.name} this is ${this.name}. I am ${this.age} year old ${this.breed}.`)
    }    
}
    


class Human {
    constructor(name) {
        this.name = name
        this.events = []
    }
    addevents(events) { // need to go into the Human --> DONE
        this.events.push(events)
    }

    attendevents(events) { // need to go into the Human --> DONE
        events.acceptedBy.push(this)
    }
    // giveReview(review) { // need to go into the Human
    //     review.gaveBy.push(this)
    //}
}

class events {
    constructor(name) { //name will be enough --> DONE
        this.name = name
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

const eventsAfternoon = new events('afternoon walk')
Kira.addevents(eventsAfternoon)
Wave.attendevents(eventsAfternoon)
Jack.attendevents(eventsAfternoon)

console.log(Kira.greet(Wave))
console.log(Kira, Kira.events[0].acceptedBy)

const eventsWeekend = new events('weekend trip')
Wave.addevents(eventsWeekend)
Kira.attendevents(eventsWeekend)

console.log(Wave, Wave.events[0].acceptedBy)

// const reviewWave = new Review ('5 stars')
// Wave.giveReview(reviewWave)

// const reviewKira = new Review ('4 stars')
// Kira.giveReview(reviewKira)

// const reviewJack = new Review ('4 stars')
// Jack.giveReview(reviewJack)

// console.log()


//COMMENTS:
//multibable dog owner what will be??
// dogs cant add eventss they need the owners to do it. ?? 
// Ceyhan will attend or create events and there must be an array with which dogs he has.
//greet --> meet is better for the dogs
// human class must be added!! only 1 human right now 2 nd is future features.... --> HUman class added. DONE

