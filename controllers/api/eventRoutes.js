const router = require('express').Router();
const { Event } = require('../../models');

// get the list of all the events made
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//post a new event
router.post('/add', async (req, res) => {
  try {
    console.log(req.body);
    const newEvent = await Event.create({
      ...req.body,
      user_id_1: req.session.user_id,
      user_id_2: 2,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error getting events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// update event
router.put('/:id', async (req, res) => {
  console.log(req);
  const eventId = req.params.id;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Assuming req.body contains the updated data for the event
    await event.update(req.body);

    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id/cancel', async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findByPk(eventId);
    console.log(event);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Assuming req.body contains the updated data for the event
    await event.update(req.body);

    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
