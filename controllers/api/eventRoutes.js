const router = require('express').Router();
const { Event } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/add', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
