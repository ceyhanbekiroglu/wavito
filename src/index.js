/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const colors = require('colors')
const Human = require('./human')
const Event = require('./event')
const Dog = require('./dog')
const Vet = require('./vet')

const sinem = new Human('Sinem', 'Wave, Bond')
const rosa = new Human('Rosa', 'kira')
const carlos = new Human('Carlos', 'Jack')
const ceyhan = new Human('Ceyhan', 'Pers')
const michael = new Human('Michael', 'Mishu')

const wave = new Dog('Wave', 'Labrabor Retriever', 2020, 'Sinem')
const kira = new Dog('Kira', 'Border Collie', 2019, 'Rosa')
const jack = new Dog('Jack', 'Jack Russel', 2016, 'Carlos')
const bond = new Dog('Bond', 'Labrabor Retriever', 2009, 'Sinem')
const pers = new Dog('Pers', 'German Shepherd', 2007, 'Ceyhan')
const mishu = new Dog('Mishu', 'British Shorthair', 2010, 'Michael')

const vovet = new Vet('Vovet', 'can xicota', 623184652)
const veterinaris = new Vet('Veterinaris', 'granollers', 938703654)

const afternoonEvent = new Event('Afternoon walk', 'Central park', '05/10/21', '18:00')
rosa.addEvent(afternoonEvent)
sinem.attendEvent(afternoonEvent)
carlos.attendEvent(afternoonEvent)
ceyhan.rejectEvent(afternoonEvent)

console.log('Accepted By', rosa, rosa.events[0].acceptedBy)
console.log('Rejected By', rosa, rosa.events[0].rejectedBy)

const weekendEvent = new Event('weekend trip', 'mallorca', '10/10/21 - 15/10/21', '09:00 - 18:00')
sinem.addEvent(weekendEvent)
rosa.attendEvent(weekendEvent)
ceyhan.attendEvent(weekendEvent)
michael.rejectEvent(weekendEvent)

console.log('Accepted By', sinem, sinem.events[0].acceptedBy)
console.log('Rejected By', sinem, sinem.events[0].rejectedBy)

sinem.giveFeedback(vovet, 5)
rosa.giveFeedback(vovet, 3)
console.log(vovet.vetRating) // not finished yet

console.log(sinem.dogs.black.bold) // how can i see 2 different breeds?? for each can work
console.log(rosa.dogs.grey.italic)

console.log(bond.breed.blue)
console.log(kira.breed.magenta)
console.log(jack.breed.yellow)

wave.likesDislikes = 'I love other dogs. I don`t like listening my humans.'
pers.likesDislikes = 'I love make funny things all day long. I don`t like going work.'
mishu.likesDislikes = 'I am a grumpy cat but don`t tell anybody:). I don`t like doing things.'
console.log(wave.profile)
console.log(pers.profile)
console.log(mishu.profile)
