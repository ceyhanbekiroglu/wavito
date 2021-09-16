/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource')
// })

const colors = require('colors')
const Human = require('../models/human')
const Event = require('../models/event')
const Dog = require('../models/dog')
const Vet = require('../models/vet')
// const dog = require('../models/dog')
// const human = require('../models/human')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.dogs) {
    query.dogs = req.query.dogs
  }

  res.send(await Human.find(query))
})
async function main() {
  // router.get('/initialize', async (req, res) => {
  const sinem = await Human.create({ name: 'Sinem' })
  // Human.save()
  const rosa = await Human.create({ name: 'Rosa' })
  const carlos = await Human.create({ name: 'Carlos' })
  const ceyhan = await Human.create({ name: 'Ceyhan' })
  const michael = await Human.create({ name: 'Michael' })

  const wave = await Dog.create({ dogName: 'Wave', breed: 'Labrabor Retriever', birthYear: 2020, human: sinem })
  const kira = await Dog.create({ dogName: 'Kira', breed: 'Border Collie', birthYear: 2019, human: rosa })
  const jack = await Dog.create({ dogName: 'Jack', breed: 'Jack Russel', birthYear: 2016, human: carlos })
  const bond = await Dog.create({ dogName: 'Bond', breed: 'Labrabor Retriever', birthYear: 2009, human: sinem })
  const pers = await Dog.create({ dogName: 'Pers', breed: 'German Shepherd', birthYear: 2007, human: ceyhan })
  const mishu = await Dog.create({ dogName: 'Mishu', breed: 'British Shorthair', birthYear: 2010, human: michael })

  // wave.save()

  await sinem.addDog(wave)
  await rosa.addDog(kira)
  await carlos.addDog(jack)
  await sinem.addDog(bond)
  await ceyhan.addDog(pers)
  await michael.addDog(mishu)

  const vovet = await Vet.create({ vetName: 'Vovet', location: 'can xicota', tel: 623184652 })
  const veterinaris = await Vet.create({ vetName: 'Veterinaris', location: 'granollers', tel: 938703654 })

  const afternoonEvent = await Event.create({
    name: 'Afternoon walk',
    location: 'Central park',
    date: '05/10/21',
    time: '18:00',
  })
  await rosa.addEvent(afternoonEvent)
  await sinem.attendEvent(afternoonEvent)
  await carlos.attendEvent(afternoonEvent)

  console.log('Accepted By', rosa, rosa.events[0].acceptedBy)

  const weekendEvent = await Event.create({
    name: 'weekend trip',
    location: 'mallorca',
    date: '10/10/21 - 15/10/21',
    time: '09:00 - 18:00',
  })
  await sinem.addEvent(weekendEvent) // how to seperate the dogs??
  await rosa.attendEvent(weekendEvent)
  await ceyhan.attendEvent(weekendEvent)

  console.log('Accepted By', sinem, sinem.events[0].acceptedBy)

  console.log(sinem.dogs) // how can i see 2 different breeds?? for each can work
  console.log(rosa.dogs)
  // console.log(bond.breed.blue)
  // console.log(kira.breed.magenta)
  // console.log(jack.breed.yellow)

  sinem.addLike = (wave, 'I love other dogs.') // seperate 2 different
  sinem.addDislike = (wave, 'I don`t like listening my humans.')

  // sinem.addLike = (bond, 'I love playing with my humans and I sit on them.')
  // sinem.addDislike = (bond, 'I don`t like stairs')
  // ceyhan.like = (pers, 'I love make funny things all day long.')
  // ceyhan.dislike = (pers, 'I don`t like going work.')
  // michael.like = (mishu, 'I am a grumpy cat but don`t tell anybody:). I don`t like doing things.')
  // michael.like = (mishu, 'I don`t like doing things.')
  // console.log(wave.profile)
  // console.log(bond.profile)
  // console.log(pers.profile)
  // console.log(mishu.profile)

  // console.log(sinem.giveFeedback(5, vovet))
  // console.log(vovet.ratings)
  // console.log(wave.likes)
  // console.log(sinem.dogs)
  // console.log(rosa.dogs)
  console.log(wave.breed.red)

  console.log(sinem.dogs)
  console.log(ceyhan.dogs)

  // res.sendStatus(200)
}

main()

router.get('/:userId', async (req, res) => {
  const human = await Human.findById(req.params.userId)

  if (human) res.render('human', { human })
  else res.sendStatus(404)
})

module.exports = router

// old index.js

// const colors = require('colors')
// const Human = require('./models/human')
// const Event = require('./models/event')
// const Dog = require('./models/dog')
// const Vet = require('./vet')
// const human = require('../models/human') ????

// const sinem = new Human('Sinem')
// const rosa = new Human('Rosa')
// const carlos = new Human('Carlos')
// const ceyhan = new Human('Ceyhan')
// const michael = new Human('Michael')

// const wave = new Dog('Wave', 'Labrabor Retriever', 2020, sinem)
// const kira = new Dog('Kira', 'Border Collie', 2019, rosa)
// const jack = new Dog('Jack', 'Jack Russel', 2016, carlos)
// const bond = new Dog('Bond', 'Labrabor Retriever', 2009, sinem)
// const pers = new Dog('Pers', 'German Shepherd', 2007, ceyhan)
// const mishu = new Dog('Mishu', 'British Shorthair', 2010, michael)

// sinem.addDog(wave)
// rosa.addDog(kira)
// carlos.addDog(jack)
// sinem.addDog(bond)
// ceyhan.addDog(pers)
// michael.addDog(mishu)

// const vovet = new Vet('Vovet', 'can xicota', 623184652)
// const veterinaris = new Vet('Veterinaris', 'granollers', 938703654)

// const afternoonEvent = new Event('Afternoon walk', 'Central park', '05/10/21', '18:00')
// rosa.addEvent(afternoonEvent)
// sinem.attendEvent(afternoonEvent)
// carlos.attendEvent(afternoonEvent)

// console.log('Accepted By', rosa, rosa.events[0].acceptedBy)

// const weekendEvent = new Event('weekend trip', 'mallorca', '10/10/21 - 15/10/21', '09:00 - 18:00')
// sinem.addEvent(weekendEvent) // how to seperate the dogs??
// rosa.attendEvent(weekendEvent)
// ceyhan.attendEvent(weekendEvent)

// console.log('Accepted By', sinem, sinem.events[0].acceptedBy)

// console.log(sinem.dogs) // how can i see 2 different breeds?? for each can work
// console.log(rosa.dogs)
// // console.log(bond.breed.blue)
// // console.log(kira.breed.magenta)
// // console.log(jack.breed.yellow)

// sinem.like = (wave, 'I love other dogs.') // seperate 2 different
// sinem.dislike = (wave, 'I don`t like listening my humans.')

// sinem.like = (bond, 'I love playing with my humans and I sit on them.')
// sinem.dislike = (bond, 'I don`t like stairs')
// ceyhan.like = (pers, 'I love make funny things all day long.')
// ceyhan.dislike = (pers, 'I don`t like going work.')
// michael.like = (mishu, 'I am a grumpy cat but don`t tell anybody:). I don`t like doing things.')
// michael.like = (mishu, 'I don`t like doing things.')
// // console.log(wave.profile)
// // console.log(bond.profile)
// // console.log(pers.profile)
// // console.log(mishu.profile)

// console.log(sinem.giveFeedback(5, vovet))
// console.log(vovet.ratings)
// // console.log(wave.likes)
// // console.log(sinem.dogs)
// // console.log(rosa.dogs)
// console.log(wave.breed.red)

// console.log(sinem.dogs)
// console.log(ceyhan.dogs)

// module.exports = router
