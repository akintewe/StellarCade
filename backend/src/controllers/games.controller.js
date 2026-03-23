/**
 * Controller for managing all game-related API requests.
 */
const logger = require('../utils/logger');
const gameService = require('../services/game.service');

const getGames = async (req, res, next) => {
  try {
    // TODO: Fetch games from DB
    res.status(200).json({ games: [] });
  } catch (error) {
    next(error);
  }
};

const getRecentGames = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const { gameType, status, sortBy, sortDir } = req.query;

    const result = await gameService.getRecentGames({
      page,
      limit,
      gameType,
      status,
      sortBy,
      sortDir,
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const playSimpleGame = async (req, res, next) => {
  try {
    const { gameType, _amount, _choice } = req.body;
    logger.info(`User ${req.user.id} playing ${gameType}`);
    // TODO: Logic
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGames,
  getRecentGames,
  playSimpleGame,
};
