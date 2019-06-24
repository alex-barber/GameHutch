import { Tag } from 'antd';
import React from 'react';
import _ from 'lodash';

export const columns = [
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
    title: 'Genre',
    key: 'genre',
    dataIndex: 'genre',

    render: (genre, row, table) =>
      row.genre ? (
        <span>
          {genre.map(genre => {
            let color = genre.length > 5 ? 'geekblue' : 'green';

              if (genre==='Action'){
              color = 'volcano'
            }
             else if (genre === "Indie"){
             color = "#735ca8"
            }
              else if (genre === "Strategy"){
            color = "#69775f"
            }
               else if (genre === "RPG"){
             color = "gold"
            }
           else if (genre === "Massively Multiplayer"){
             color = "#020201"
            }

            return (
              <Tag color={color} key={genre}>
                {genre}
              </Tag>
            );
          })}
        </span>
      ) : (
        false
      ),

    filters: [
      {
        text: 'Action',
        value: ['Action'],
      },
      {
        text: 'Adventure',
        value: ['Adventure'],
      },
      {
        text: 'Indie',
        value: ['Indie'],
      },
        {
        text: 'Strategy',
        value: ['Strategy']
      },
      {
        text: 'RPG',
        value: ['RPG']
      },
      {
        text: 'Massively Multiplayer',
        value: ['Massively Multiplayer']
      },
    ],

    onFilter: (value, record) => (

      record.genre && _.difference(value, record.genre).length === 0
    ),
  },
  {
    title: 'tags',
    key: 'tags',
    dataIndex: 'tags',
filtered: true,
    render: (tags, row, table) =>
      row.tags ? (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';

            if (tag==='Action'){
              color = 'volcano'
            }
            else if (tag === 'Shooter'){
              color = 'purple'
            }
          else if (tag === 'Open World'){
              color = 'cyan'
            }else if (tag === 'Rogue-like'){
              color = '#020201'
            }
          else if (tag === "Puzzle"){
             color = "orange"
            }
          else if (tag === "RPG"){
             color = "gold"
            }
          else if (tag === "Sci-Fi"){
             color = "blue"
            }
          else if (tag === "Fantasy"){
             color = "lime"
            }
          else if (tag === "Indie"){
             color = "#735ca8"
            }
          else if (tag === "Strategy"){
            color = "#69775f"
            }



            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ) : (
        false
      ),

    filters: [
      {
        text: 'Rogue-like',
        value: ['Rogue-like'],
      },
      {
        text: 'Pixel Graphics',
        value: ['Pixel Graphics']
      },
      {
        text: 'Action',
        value: ['Action']
      },
      {
        text: 'FPS',
        value: ['FPS']
      },
      {
        text: 'Shooter',
        value: ['Shooter']
      },
      {
        text: 'Open World',
        value: ['Open World']
      },
      {
        text: 'Puzzle',
        value: ['Puzzle']
      },
      {
        text: 'Indie',
        value: ['Indie']
      },
      {
        text: 'Sci-Fi',
        value: ['Sci-Fi']
      },
      {
        text: 'Fantasy',
        value: ['Fantasy']
      },
      {
        text: 'RPG',
        value: ['RPG']
      },
      {
        text: 'Strategy',
        value: ['Strategy']
      },
    ],

    onFilter: (value, record, row) => (
      record.tags && _.difference(value, record.tags).length === 0
    ),
  },
];
