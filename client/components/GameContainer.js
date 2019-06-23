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
    this.state= {
      render: false
    }
  }

  async componentDidMount() {
    try {
      if (!this.props.games[0]) {
        console.log('Mount')
       await this.props.getGames();

      }

      // console.log('in component props', (Object.values(this.props.games), this.props.games))
    } catch (error) {
      console.error(error);
    }
  }

  async handleClick(){

    try {
      // console.log(this.props.games)
      console.log('handleClick: before')

     await this.props.getTags(this.props.games)
      console.log('handleClick: after')
      this.setState({
        render: true
      })
    }catch(error){
      console.error(error)
    }
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state==nextState
  // }

  render() {
    // console.log('PROPS', this.props)
 let renderArray= (Object.values(this.props.games));
 console.log('BEFORE: ')
    return (

      console.log('RENDER', renderArray),
      (
        <div>

          <h1> STEAM</h1>
          <div>
            <Button onClick={() =>this.handleClick()}>Get Tags</Button>
          </div>
          {this.props.games ? (
            <div>
              <Table
                dataSource={renderArray}
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
