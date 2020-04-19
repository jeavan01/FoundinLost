const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User');
const Lost = require('../models/Lost');

// Welcome Page
router.get('/', (req, res) => res.render('welcome'));
// dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
    name: req.user.name
}));

// contact
router.get('/Contact', ensureAuthenticated, (req, res) => res.render('Contact', {
    name: req.user.name
}));

// lost
router.get('/Lost', ensureAuthenticated, (req, res) => res.render('Lost', {
    name: req.user.name
}));
// lost
router.post('/Lost', (req, res) => {
    const { name, email, text, } = req.body;

const newLost = new Lost({
                  name,
                  email,
                  text 
                });
                        // save user
                        newLost.save()
                        .then(user => {
                            req.flash('succes_msg', 'You are now registered and can log in');
                            res.redirect('/dashboard');
                        })
                        .catch(err => console.log(err));
            }
);
module.exports = router;
