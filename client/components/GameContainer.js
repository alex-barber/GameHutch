import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import { Table, Divider, Tag } from 'antd';

export default class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steamGames: [],
    };
  }

  async componentDidMount() {
    try {
      let games = await axios.get('/api/steam/allgames');
      // console.log(games.data.response.games[34]);



      //GET TAGS & GENRE
      // for (let i = 0; i < 4; i++) {
     // if (i%4===0){await new Promise(r => setTimeout(r, 1000))}
     //    let response = await axios.post('api/steam/singlegame/tags', {
     //      game: games.data.response.games[i],
     //    });
     //    games.data.response.games[i].genre=response.data.genre.split(', ')
     //    games.data.response.games[i].tags=response.data.tags
     //  }

      this.setState({
        steamGames: games.data.response.games,
      });

      console.log(this.state.steamGames);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const columns = [
      {
        title: '',
        dataIndex: 'img_icon_url',
        render: (text, row) => (
          <img
            src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${
              row.appid
            }/${text}.jpg`}
          />
        ),
      },

      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Playtime',
        dataIndex: 'playtime_forever',
        key: 'playtime_forever',
        render: text => <span>{parseInt(text / 60)}</span>,
      },
    ];
    return (
      <div>
        {this.state.steamGames.length ? (
          // this.state.steamGames.map( game =>(
          //     <div key={game.appid}>{game.name}</div>)
          // )
          <div>
            <h1> STEAM</h1>
            <Table
              dataSource={this.state.steamGames}
              columns={columns}
              pagination={false}
            />
          </div>
        ) : (
          <div>LOADING</div>
        )}
      </div>
    );
  }
}
