'use strict'

var utils = require('../lib/utils')

exports = module.exports = function repeatNotification () {
  return function (req, res) {
    var challengeName = decodeURIComponent(req.query.challenge)
    var challenge = utils.findChallenge(challengeName)

    if (challenge && challenge.solved) {
      utils.sendNotification(challenge, true)
    }

    res.sendStatus(200)
  }
}
