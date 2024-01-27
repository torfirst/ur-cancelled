const router = require('express').Router();
const { Event } = require('../models');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  let events = [];
  if (req.session.user_id) {
    console.log('You are logged in user #', req.session.user_id);
    const eventData = await Event.findAll({
      where: {
        [Op.or]: [
          { user_id_1: req.session.user_id },
          { user_id_2: req.session.user_id },
        ],
      },
    });
    events = eventData.map((event) => event.get({ plain: true }));
  }
  console.log(events);
  res.render('home', {
    // user: userData,
    events,
    logged_in: true,
    showProfileBtn: true,
    showBackBtn: false,
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    logged_in: false,
    showProfileBtn: false,
    showBackBtn: false,
    includeScript: 'login.js',
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    logged_in: false,
    showProfileBtn: false,
    showBackBtn: false,
    includeScript: 'signup.js',
});

router.get('/profile', (req, res) => {
  res.render('profile', {
    logged_in: true,
    showProfileBtn: false,
    showBackBtn: true,
    includeScript: 'profile.js',
  });
});

module.exports = router;
