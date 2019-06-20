import axios from 'axios';

const GET_STEAM_GAMES = 'GET_STEAM_GAMES';

export const getSteamGames = games => ({
  type: GET_STEAM_GAMES,
  games: games,
});

export const steamReducer = (games = [], action) => {
  console.log('hi');
  switch (action.type) {
    case GET_STEAM_GAMES:
      return action.games;
    default:
      return games;
  }
};

export const getSteamGamesThunk = () => {
  console.log('hi2');
  return async dispatch => {
    try {
      const response = await axios.get('/api/steam/allgames');
      const games = response.data;
      const action = getSteamGames(games.response.games);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

export default steamReducer;
