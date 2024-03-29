const router = require('express').Router();
const { Event, User } = require('../models');
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
      include: [User],
    });
    events = eventData.map((event) => event.get({ plain: true }));
  }
  console.log(events);
  res.render('home', {
    name: '',
    userName: req.session.userName,
    events,
    logged_in: true,
    showProfileBtn: true,
    showBackBtn: false,
    includeScript: 'home.js',
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    includeScript: 'login.js',
    showBackBtn: false,
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    logged_in: false,
    includeScript: 'signup.js',
    showBackBtn: false,
  });
});

router.get('/profile', (req, res) => {
  res.render('profile', {
    logged_in: true,
    includeScript: 'profile.js',
    showBackBtn: true,
  });
});

router.get('/logout', (req, res) => {
  res.render('logout', {
    logged_in: false,
    includeScript: 'logout.js',
    showBackBtn: false,
  });
});

module.exports = router;
