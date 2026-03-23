const GameModel = require('../models/Game.model');

/**
 * Service for managing game-related business logic.
 */
const gameService = {
    /**
     * Fetches recent games with pagination metadata.
     *
     * @param {Object} params - Query parameters
     * @returns {Promise<{items: Array, page: number, pageSize: number, total: number, totalPages: number}>}
     */
    getRecentGames: async (params) => {
        const { page, limit } = params;
        const { items, total } = await GameModel.findRecent(params);

        const totalPages = Math.ceil(total / limit);

        return {
            items,
            page,
            pageSize: limit,
            total,
            totalPages,
        };
    }
};

module.exports = gameService;
