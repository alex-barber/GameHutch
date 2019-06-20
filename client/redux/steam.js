import axios from 'axios'

const GET_STEAM_GAMES='GET_STEAM_GAMES'

export const getSteamGames = games =>({
    type: GET_STEAM_GAMES,
    games: games
})

export const steamReducer=(games=[], action)=>{

    switch (action.type){
        case GET_STEAM_GAMES:
            return action.games
        default: return games
    }

}

export const getSteamGamesThunk = () =>{
    return async dispatch => {
        const response = await axios.get('/api/steam/allgames')
        const games = response.data
        const action = getSteamGames(games)
        dispatch(action)
    }
}

export default steamReducer
