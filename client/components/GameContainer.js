import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

export default class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steamGames: [],
    };
  }

  async componentDidMount() {
    try {

      let games = await axios.get('/steam');
      // console.log(games.data.response.games[34]);

      this.setState({
        steamGames: games.data.response.games
      })
      console.log(this.state.steamGames)
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
        <div>
        <Button>xxxx</Button>

    {this.state.steamGames.length ?

        this.state.steamGames.map( game =>(
            <div key={game.appid}>{game.name}</div>)
        )

        :

        (<div>LOADING</div>)}
 </div>
    )
  }
}
