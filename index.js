const human = require('./human') // seperate this class human + dog + video coding with coyotiv way
const Event = require('./event')

const wave = new human('Sinem', 'Wave', 2020, 'Labrabor Retriever') // small letters in the const
const rosa = new human('Rosa', 'Kira', 2019, 'Border Collie')
const carlos = new human('Carlos', 'Jack', 2016, 'Jack Russel')
const sand = new human('Sinem', 'sand', 2020, 'Labdoodle')

const eventAfternoon = new Event('afternoon walk')
rosa.addEvent(eventAfternoon)
wave.attendEvent(eventAfternoon)
carlos.attendEvent(eventAfternoon)
sand.attendEvent(eventAfternoon)

//console.log(rosa.greet(wave))
console.log(rosa, rosa.event[0].acceptedBy)

const eventWeekends = new Event('weekend trip')
wave.addEvent(eventWeekends)
rosa.attendEvent(eventWeekends)
sand.attendEvent(eventWeekends)

console.log(wave, wave.event[0].acceptedBy)

console.log(wave.human)
console.log(sand.human)
console.log(rosa.human)

console.log(wave.breedOf)
console.log(rosa.breedOf)

console.log(wave.age)
console.log(carlos.age)

function foo() {
  return 3
}

// const reviewWave = new Review ('5 stars')
// wave.giveReview(reviewWave)

// const reviewKira = new Review ('4 stars')
// rosa.giveReview(reviewKira)

// const reviewJack = new Review ('4 stars')
// carlos.giveReview(reviewJack)

//COMMENTS:
//multibable dog owner what will be??
// dogs cant add eventss they need the owners to do it. ??
// Ceyhan will attend or create event and there must be an array with which dogs he has.
//greet --> meet is better for the dogs
// human class must be added!! only 1 human right now 2 nd is future features.... --> HUman class added. DONE
