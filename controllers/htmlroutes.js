const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {
    // user: userData,
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