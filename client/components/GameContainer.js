import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { columns } from './templates';
import { Table, Divider, Tag } from 'antd';

import { getSteamGamesThunk } from '../redux/steam';
import { Button } from 'antd';
import { addTagsThunk } from '../redux/steam';

import TagFilter from './TagFilter'

export class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickTags = this.handleClickTags.bind(this);
    this.handleClickGames = this.handleClickGames.bind(this);
    this.state = {
      render: false,
    };
  }

  async handleClickTags() {
    try {
      await this.props.getTags(this.props.games);
      this.setState({
        render: true,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async handleClickGames() {
    try {
      await this.props.getGames();
      this.setState({
        render: true,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    let renderArray = Object.values(this.props.games);
    // console.log('BEFORE: ');
    return (
      // console.log('RENDER', renderArray),
      (
        <div>

          {this.props.games ? (
            <div>
              <Table

                rowKey={record => record.appid}
                dataSource={renderArray}
                columns={columns}


                pagination={false}
                bordered
                title={() => (
                    <div display='flex' justify-content= 'space-between'>
                      <div>
                        <h3>STEAM</h3>
                      </div>
                      <div>
                    <Button onClick={() => this.handleClickGames()}>
                      Get Games{' '}
                    </Button>


                    <Button onClick={() => this.handleClickTags()}>
                      Get Tags
                    </Button>
                      </div>

                    </div>
                )}
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
    getTags: games => dispatch(addTagsThunk(games)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
