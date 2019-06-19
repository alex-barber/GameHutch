const router = require('express').Router();

const axios = require('axios')



router.get('/allgames', async (req, res, next) => {
  try {
    let games = await axios.get(
      'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=6C9C42CBC99FA5784E1817CE02E9378B&steamid=76561197987568590&include_appinfo=1'
    );
// console.log(games.data.response.games[0])
    res.send(games.data);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
