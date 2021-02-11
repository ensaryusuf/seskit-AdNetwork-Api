const router = require('express').Router()
const version = require('../models/version')

router.use('/ads', require('./ads'))
router.use('/websockets', require('./websockets'))

router.get('/', function (req, res) {
  res.status(200).json(version.apiVersion())
})

module.exports = router
