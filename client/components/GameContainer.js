import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import { Table, Divider, Tag } from 'antd';

import { getSteamGamesThunk } from '../redux/steam';

export class GameContainer extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      if (!this.props.games[0]) {
        this.props.getGames();
      }


      // console.log('in component props', (Object.values(this.props.games), this.props.games))
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // console.log('PROPS', this.props)
    const columns = [
      // {
      //   title: '',
      //   dataIndex: 'img_icon_url',
      //   render: (text, row) => (
      //     <img
      //       src={`https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${
      //         row.appid
      //       }/${text}.jpg`}
      //     />
      //   ),
      // },

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
      {
        title: 'tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tag, row) =>(
console.log(tag),
              <span>
                {tags.map(tag => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';

                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </span>)}

    ]
    return (
      console.log('RENDER'),
      (
        <div>
          {this.props.games ? (
            <div>
              <h1> STEAM</h1>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
