const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homePage', {
    name: 'This is text code, look at this text',
    logged_in: true,
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
  // var em = req.body.email;
  // res.render('main', { email:em });

  });
});

router.get('/all', (req, res) => {
  res.render('all');
});

module.exports = router;
