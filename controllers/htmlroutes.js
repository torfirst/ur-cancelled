const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login', {
    name: '',
    // user: userData,
    logged_in: false,
  });
});

// router.get('/login', (req, res) => {
//   res.render('login', {
//   var em = req.body.email;
//   var pw = req.body.password;
//   res.render('main', { email: em, password: pw });

//   });
// });

// router.get('/signup', (req, res) => {
//   res.render('views/signup', {
//     pageTitle: 'Sign Up',
//     body: 'signup',
//     logged_in: false,
//   });
// });

router.get('/all', (req, res) => {
  res.render('all');
});

module.exports = router;