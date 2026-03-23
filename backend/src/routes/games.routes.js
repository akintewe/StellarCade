const express = require('express');
const { getGames, getRecentGames, playSimpleGame } = require('../controllers/games.controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', getGames);
router.get('/recent', getRecentGames);
router.post('/play', auth, playSimpleGame);

module.exports = router;
