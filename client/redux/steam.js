import axios from 'axios';

const GET_STEAM_GAMES = 'GET_STEAM_GAMES';

const ADD_TAGS = 'ADD_TAGS'

export const getSteamGames = games => ({
  type: GET_STEAM_GAMES,
  games: games,
});

export const addTags = game => ({
  type: ADD_TAGS,
  game: game
})

export const steamReducer = (games = [], action) => {
  console.log('hi');
  switch (action.type) {
    case GET_STEAM_GAMES:
      return action.games;
    case ADD_TAGS:
      console.log(games)
        for (let i=0; i< games.games.length; i++){

            console.log(games.games[i])

        }

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
      const action = getSteamGames(games.response);
      console.log('RESPONSE: ', games.response)
      dispatch(action);

      let game=games.response.games[1]
      let addtags=  await axios.post('api/steam/singlegame/tags', {
           game: game,
            index: 1
      }

      let action2 = addTags('stuff')
      dispatch(action2)

      // for (let i=0; i< games.response.games.length; i++){
      //
      //   let game = games.response.games[i]
      //      let response = await axios.post('api/steam/singlegame/tags', {
      //     game: game
      //   });





    } catch (error) {
      console.error(error);
    }
  };
};


export const addTagsThunk = (game) => {
  return async dispatch =>{
    try{
      let response = await axios.post('api/steam/singlegame/tags', {
          game: game
        });
    //  games.data.response.games[i],
    }catch(error){
      console.error(error)
    }
  }
}

export default steamReducer;
