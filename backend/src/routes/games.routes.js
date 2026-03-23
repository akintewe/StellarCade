const express = require('express');
const { getGames, playSimpleGame } = require('../controllers/games.controller');
const auth = require('../middleware/auth.middleware');
const idempotency = require('../middleware/idempotency.middleware');

const router = express.Router();

router.get('/', getGames);
router.post('/play', auth, idempotency, playSimpleGame);

module.exports = router;
