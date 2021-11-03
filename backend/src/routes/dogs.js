const express = require('express')

const router = express.Router()

const Dog = require('../models/dog')


router.get('/:dogId', async (req, res) => {
    const dog = await Dog.findById(req.params.dogId)

    if (dog) res.send(dog)
    else res.sendStatus(404)
})

router.post('/:dogId/adds', async (req, res) => {
    const dog = await Dog.findById(req.params.dogId)

    await dog.addDog(dog)
    res.sendStatus(200)
})

router.get('/:dogId/json', async (req, res) => {
    const dog = await Dog.findById(req.params.dogId)
    res.send(dog)
})

module.exports = router
