const router = require('express').Router()
const ads = require('../models/ads')

router.get('/', function (req, res) {
  res.status(200).json({ ads: ads.getAll() })
})

router.get('/:adsID', function (req, res) {
  const plugin = ads.get(req.params.adsID)

  if (plugin === undefined) {
    res.sendStatus(404)
  } else {
    res.status(200).json({ plugin })
  }
})

module.exports = router
