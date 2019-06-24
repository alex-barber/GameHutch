import axios from 'axios';

const GET_STEAM_GAMES = 'GET_STEAM_GAMES';

const ADD_TAGS = 'ADD_TAGS';

export const getSteamGames = games => ({
  type: GET_STEAM_GAMES,
  games: games,
});

export const addTags = game => ({
  type: ADD_TAGS,
  game: game,
});

export const steamReducer = (library = [], action) => {
  switch (action.type) {
    case GET_STEAM_GAMES:

      return action.games;
    case ADD_TAGS:
      const index = action.game[0];

      // console.log(library[index], index, library);

      if (library[index]) {
        // console.log('adding tags');

        return {
          ...library,
          [index]: {
            ...library[index],
            tags: action.game[2],
            genre: action.game[1]
          },
        };
      } else {
        return library;
      }

    default:
      return library;
  }
};

export const getSteamGamesThunk = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/steam/allgames');
      const games = response.data.response.games;
      const action = getSteamGames(games);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

export const addTagsThunk = games => {
  return async dispatch => {
    try {

        for (let i = 0; i < Object.values(games).length-1; i++) {
          let game = games[i];
          let tags = await axios.post('api/steam/singlegame/tags', {
            game: game,
            index: i,
          });
        let action2 = addTags(tags.data);
        dispatch(action2);
      };

    } catch (error) {
      console.error(error);
    }
  };
};

export default steamReducer;
