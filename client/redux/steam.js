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
      console.log('IN GET: ','action payload:', Array.isArray(action.games),'store: ', Array.isArray(library))

      return action.games;
    case ADD_TAGS:


      // console.log('IN ADDTAGS: ', action.game, Array.isArray(library), library);
      // console.log('ACTION: ', action.game, 'GAME: ', library);


      let index = action.game[0];

      console.log(library[index], index, library)

      if (library[index]) {
        console.log('adding tags')
        //  let copy ={...library};
        // copy
        library[index].genre= action.game[1]
        library[index].tags=action.game[2]
        return library
      }


      else{
      return library;}

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

      //TODO: BREAK OUT INTO BUTTON:

      // for (let i = 0; i < 2; i++) {
      //   let game = games[i];
      //   let tags = await axios.post('api/steam/singlegame/tags', {
      //     game: game,
      //     index: i,
      //   });
      //   // console.log(tags.data)
      //   // console.log('THUNK: ', i);
      //
      //   let action2 = addTags(tags.data);
      //   dispatch(action2);
      // }
    } catch (error) {
      console.error(error);
    }
  };
};

export const addTagsThunk = (games) => {
  return async dispatch =>{
    try{


            for (let i = 0; i < 2; i++) {
        let game = games[i];
        let tags = await axios.post('api/steam/singlegame/tags', {
          game: game,
          index: i,
        });
        // console.log(tags.data)
        // console.log('THUNK: ', i);

        let action2 = addTags(tags.data);
        dispatch(action2);
      }

      // let response = await axios.post('api/steam/singlegame/tags', {
      //     game: game
      //   });
    //  games.data.response.games[i],
    }catch(error){
      console.error(error)
    }
  }
}

export default steamReducer;
