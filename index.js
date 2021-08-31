const HumanDog = require("./human");
const events = require("./events");  

const Wave = new HumanDog('Sinem', 'Wave', 2020, 'Labrabor Retriever')
const Kira = new HumanDog('Rosa', 'Kira', 2019, 'Border Collie')
const Jack = new HumanDog('Carlos', 'Jack', 2016, 'Jack Russel')
const Sand = new HumanDog('Sinem', 'Sand', 2020, 'Labdoodle')

const eventsAfternoon = new events('afternoon walk')
Kira.addevents(eventsAfternoon)
Wave.attendevents(eventsAfternoon)
Jack.attendevents(eventsAfternoon)
Sand.attendevents(eventsAfternoon)

//console.log(Rosa.greet(Wave))
console.log(Kira, Kira.events[0].acceptedBy)

const eventsWeekend = new events('weekend trip')
Wave.addevents(eventsWeekend)
Kira.attendevents(eventsWeekend)
Sand.attendevents(eventsWeekend)

console.log(Wave, Wave.events[0].acceptedBy)

console.log(Wave.human)
console.log(Sand.human)
console.log(Kira.human)

console.log(Wave.breedOf)
console.log(Kira.breedOf)

console.log(Wave.age)
console.log(Jack.age)


// const reviewWave = new Review ('5 stars')
// Wave.giveReview(reviewWave)

// const reviewKira = new Review ('4 stars')
// Kira.giveReview(reviewKira)

// const reviewJack = new Review ('4 stars')
// Jack.giveReview(reviewJack)

//COMMENTS:
//multibable dog owner what will be??
// dogs cant add eventss they need the owners to do it. ?? 
// Ceyhan will attend or create events and there must be an array with which dogs he has.
//greet --> meet is better for the dogs
// human class must be added!! only 1 human right now 2 nd is future features.... --> HUman class added. DONE

