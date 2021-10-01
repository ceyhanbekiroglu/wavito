/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-var */

var express = require('express')

var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Wavito app. Here you will find a playing friend to your Bestie :)' })
})

module.exports = router
