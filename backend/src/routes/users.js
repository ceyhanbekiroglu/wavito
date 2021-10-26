/* eslint-disable no-console */
/* eslint-disable spaced-comment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const colors = require('colors')
const User = require('../models/users')
const Event = require('../models/event')
const Dog = require('../models/dog')
const Vet = require('../models/vet')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.dog) {
    query.dog = req.query.dog
  }

  res.send(await User.find(query))
})

/* POST create a user */
router.post('/', async (req, res) => {
  const userToCreate = {
    name: req.body.name,
    dog: req.body.dog,
  }

  const createdUser = await User.create(userToCreate)
  res.send(createdUser)
})

router.get('/initialize', async (req, res) => {
  const sinem = new User({ name: 'Sinem', email: 'sinem@sinem.com' })
  await sinem.setPassword('test')
  await sinem.save()

  const rosa = new User({ name: 'Rosa', email: 'rosa@rosa.com' })
  await rosa.setPassword('test')
  await rosa.save()

  const carlos = new User({ name: 'Carlos', email: 'carlos@carlos.com' })
  await carlos.setPassword('test')
  await carlos.save()

  const ceyhan = new User({ name: 'Ceyhan', email: 'ceyhan@ceyhan.com' })
  await ceyhan.setPassword('test')
  await ceyhan.save()

  const michael = new User({ name: 'Michael', email: 'michael@michael.com' })
  await michael.setPassword('test')
  await michael.save()

  const wave = await Dog.create({ dogName: 'Wave', breed: 'Labrabor Retriever', birthYear: 2020, user: sinem })
  const kira = await Dog.create({ dogName: 'Kira', breed: 'Border Collie', birthYear: 2019, user: rosa })
  const jack = await Dog.create({ dogName: 'Jack', breed: 'Jack Russel', birthYear: 2016, user: carlos })
  const bond = await Dog.create({ dogName: 'Bond', breed: 'Labrabor Retriever', birthYear: 2009, user: sinem })
  const pers = await Dog.create({ dogName: 'Pers', breed: 'German Shepherd', birthYear: 2007, user: ceyhan })
  const mishu = await Dog.create({ dogName: 'Mishu', breed: 'British Shorthair', birthYear: 2010, user: michael })

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
  await sinem.addEvent(weekendEvent)
  await rosa.attendEvent(weekendEvent)
  await ceyhan.attendEvent(weekendEvent)

  console.log('Accepted By', sinem, sinem.events[0].acceptedBy)

  console.log(sinem.dogs)
  console.log(rosa.dogs)

  sinem.addLike = (wave, 'I love other dogs.')
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

  //sinem.giveFeedback(5, vovet)
  //console.log(sinem.giveFeedback(5, vovet))

  // console.log(vovet.ratings)
  // console.log(wave.likes)
  // console.log(sinem.dogs)
  // console.log(rosa.dogs)
  console.log(wave.breed.red)

  console.log(sinem.dogs)
  console.log(ceyhan.dogs)
  console.log(sinem.id)

  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send(user)
  else res.sendStatus(404)
})

router.post('/:userId/adds', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const dog = await Dog.findById(req.body.photoId)

  await user.addDog(dog)
  res.sendStatus(200)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

module.exports = router

// old index.js

// const colors = require('colors')
// const User = require('./models/human')
// const Event = require('./models/event')
// const Dog = require('./models/dog')
// const Vet = require('./vet')
// const human = require('../models/human') ????

// const sinem = new User('Sinem')
// const rosa = new User('Rosa')
// const carlos = new User('Carlos')
// const ceyhan = new User('Ceyhan')
// const michael = new User('Michael')

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
