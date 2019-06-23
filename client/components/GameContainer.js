import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { columns } from './templates';
import { Table, Divider, Tag } from 'antd';

import { getSteamGamesThunk } from '../redux/steam';
import { Button } from 'antd';
import {addTagsThunk} from "../redux/steam";

export class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    try {
      if (!this.props.games[0]) {
       await this.props.getGames();
      }

      // console.log('in component props', (Object.values(this.props.games), this.props.games))
    } catch (error) {
      console.error(error);
    }
  }

  async handleClick(){

    try {
      console.log(this.props.games)

      this.props.getTags(this.props.games)
    }catch(error){
      console.error(error)
    }
  }

  render() {
    // console.log('PROPS', this.props)

    return (
      console.log('RENDER'),
      (
        <div>

          <h1> STEAM</h1>
          <div>
            <Button onClick={this.handleClick}>Get Tags</Button>
          </div>
          {this.props.games ? (
            <div>
              <Table
                dataSource={Array.from(this.props.games)}
                columns={columns}
                pagination={false}
              />
            </div>
          ) : (
            <div>LOADING</div>
          )}
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.steam,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGames: () => dispatch(getSteamGamesThunk()),
    getTags: (games) => dispatch(addTagsThunk(games))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
