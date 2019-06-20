const router = require('express').Router();

const axios = require('axios');

const osmosis = require('osmosis');

router.get('/test', async (req, res, next) => {
  try {
    let test=[]
   await osmosis
      .get(
        'https://store.steampowered.com/app/333640/Caves_of_Qud/'
      )
      .find('.glance_tags')
      .set({

        tags: ['a[1]', 'a[2]','a[3]','a[4]','a[5]']
      }).find('.responsive_apppage_details_left.game_details:first .block_content[1]:first .block_content_inner[1]:first .details_block[1]').set({
         genre: ['a:before-sibling(div)']
       })
      .data(item => test.push(item))


    console.log(test);
    res.send(test);
  } catch (error) {
    next(error);
  }
});

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
