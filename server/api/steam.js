const router = require('express').Router();

const axios = require('axios');

const osmosis = require('osmosis');
//
// router.get('/test', async (req, res, next) => {
//   try {
//     let test = [];
//     for (let i=0; i<5; i++) {
//       console.log(i)
//       await osmosis
//           .get('https://store.steampowered.com/app/496460')
//           .find('.glance_tags')
//           .set({
//             tags: ['a[1]', 'a[2]', 'a[3]', 'a[4]', 'a[5]'],
//           })
//           .find(
//               '.responsive_apppage_details_left.game_details:first .block_content[1]:first .block_content_inner[1]:first .details_block[1]'
//           )
//           .set({
//             genre: ['a:before-sibling(div)'],
//           })
//           .data(item => test.push(item));
//     }
//     const test=await axios.get('http://steamspy.com/api.php?request=all')
//     console.log(test);
//     res.send(test.data);
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/allgames', async (req, res, next) => {
  try {
    let games = await axios.get(
      'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=6C9C42CBC99FA5784E1817CE02E9378B&steamid=76561197987568590&include_appinfo=1'
      //   'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=6C9C42CBC99FA5784E1817CE02E9378B&steamid=76561197960434622&include_appinfo=1&format=json'

    );
    res.send(games.data);
  } catch (error) {
    next(error);
  }
});

router.post('/singlegame/tags', async (req, res, next) => {
  // console.log('HITTING ROUTE', req.body);
  try {
    let game = req.body.game;
    let index = req.body.index;

    let response = await axios.get(
      `http://steamspy.com/api.php?request=appdetails&appid=${game.appid}`
    );

    console.log('API: ', index);
    res.send([
      index,
      response.data.genre.split(', '),
      Object.keys(response.data.tags).slice(0, 5),
    ]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
