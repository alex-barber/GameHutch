// import axios from "axios";

const express = require('express');
const app = express();
const request = require('request');
const path = require('path');
const axios = require('axios');
const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public'))); //serving up static files (e.g. css files)


app.use('/api', require('./api'))


// app.get('/steam', async (req, res, next) => {
//   try {
//     let games = await axios.get(
//       'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=6C9C42CBC99FA5784E1817CE02E9378B&steamid=76561197987568590&include_appinfo=1'
//     );
// // console.log(games.data.response.games[0])
//     res.send(games.data);
//   } catch (error) {
//     next(error);
//   }
// });

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
