/**
 * Base model for Game results.
 */
const db = require('../config/database');

const GameModel = {
  /**
   * Finds recent games with pagination, filtering, and sorting.
   *
   * @param {Object} params - Query parameters
   * @param {number} params.page - Page number
   * @param {number} params.limit - Items per page
   * @param {string} [params.gameType] - Filter by game type
   * @param {string} [params.status] - Filter by game result (mapped from status)
   * @param {string} [params.sortBy] - Column to sort by
   * @param {string} [params.sortDir] - Sort direction (asc/desc)
   * @returns {Promise<{items: Array, total: number}>}
   */
  findRecent: async ({ page, limit, gameType, status, sortBy, sortDir }) => {
    const offset = (page - 1) * limit;

    const query = db('games')
      .select('games.*', 'users.wallet_address as user_wallet')
      .join('users', 'games.user_id', 'users.id');

    if (gameType) {
      query.where('game_type', gameType);
    }

    if (status) {
      query.where('result', status);
    }

    // Clone query for count BEFORE applying limit/offset
    const countQuery = query.clone().clearSelect().clearOrder().count('* as total');

    // Apply sorting, limit and offset to main query
    query.orderBy(sortBy || 'created_at', sortDir || 'desc')
      .limit(limit)
      .offset(offset);

    const [items, countResult] = await Promise.all([
      query,
      countQuery
    ]);

    const total = parseInt(countResult[0]?.total || 0, 10);

    return { items, total };
  }
};

module.exports = GameModel;
