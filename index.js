const Human = require('./human') // seperate this class Human + dog + video coding with coyotiv way
const Event = require('./event')

const wave = new Human('Sinem', 'Wave', 2020, 'Labrabor Retriever') // small letters in the const
const rosa = new Human('Rosa', 'Kira', 2019, 'Border Collie')
const carlos = new Human('Carlos', 'Jack', 2016, 'Jack Russel')
const sand = new Human('Sinem', 'sand', 2020, 'Labdoodle')

const eventAfternoon = new Event('afternoon walk')
rosa.addEvent(eventAfternoon)
wave.attendEvent(eventAfternoon)
carlos.attendEvent(eventAfternoon)
sand.attendEvent(eventAfternoon)

// console.log(rosa.greet(wave))
console.log(rosa, rosa.event[0].acceptedBy)

const eventWeekends = new Event('weekend trip')
wave.addEvent(eventWeekends)
rosa.attendEvent(eventWeekends)
sand.attendEvent(eventWeekends)

console.log(wave, wave.event[0].acceptedBy)

console.log(wave.Human)
console.log(sand.Human)
console.log(rosa.Human)

console.log(wave.breedOf)
console.log(rosa.breedOf)

console.log(wave.age)
console.log(carlos.age)

// const reviewWave = new Review ('5 stars')
// wave.giveReview(reviewWave)

// const reviewKira = new Review ('4 stars')
// rosa.giveReview(reviewKira)

// const reviewJack = new Review ('4 stars')
// carlos.giveReview(reviewJack)

// COMMENTS:
// multibable dog owner what will be??
// dogs cant add eventss they need the owners to do it. ??
// Ceyhan will attend or create event and there must be an array with which dogs he has.
// greet --> meet is better for the dogs
// Human class must be added!! only 1 Human right now 2 nd is future features.... --> HUman class added. DONE
