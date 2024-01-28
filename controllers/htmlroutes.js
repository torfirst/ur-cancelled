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
    name: '',
    // user: userData,
    events,
    logged_in: true,
    showProfileBtn: true,
    includeScript: 'home.js',
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    includeScript: 'login.js',
  });
});

module.exports = router;
