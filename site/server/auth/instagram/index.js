// ****************************************************************************
// *                         INSTAGRAM AUTHENTICATION                         *
// ****************************************************************************

'use strict'

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router.get('/', passport.authenticate('instagram'))
router.get('/callback', passport.authenticate('instagram', {
		failureRedirect: '/login'
	}),
	function(req, res) {
		// Successful authentication, redirect home.
		// res.redirect('/')
		auth.setTokenCookie(req, res)
	})

module.exports = router;