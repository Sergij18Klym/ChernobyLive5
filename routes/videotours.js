const express = require('express');
const router = express.Router();
const { v4: uuidV4 } = require('uuid');

const { checkAuth } = require('../public/jsAuth/auth');

router.get('/', async (req, res) => {
  try {
    res.redirect(`/${uuidV4()}`);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.get('/:room', checkAuth, async (req, res) => {
  try {
    res.render('videotours/room', { 
      roomId: req.params.room,
      balbes: req.user
    });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

module.exports = router;