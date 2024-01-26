const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {
    // name: '',
    // user: userData,
    logged_in: true,
    showProfileBtn: true,
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    logged_in: false,
    showProfileBtn: false,
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    // pageTitle: 'Sign Up',
    // body: 'signup',
    logged_in: false,
    showProfileBtn: false,
  });
});

router.get('/profile', (req, res) => {
  res.render('profile', {
    // pageTitle: 'Sign Up',
    // body: 'signup',
    logged_in: true,
    showProfileBtn: false,
  });
});

module.exports = router;