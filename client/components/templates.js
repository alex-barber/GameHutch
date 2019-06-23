import {Tag} from "antd";
import React from "react";
import _ from 'lodash'


export  const columns = [
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


        render: (tags, row, table) =>(
            row.tags ?
            <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>

                : false ),

            filters: [
              {
                  text: 'Rogue-like',
              value: ['Rogue-like', 'Pixel Graphics']
              },
                {
                    text: 'Pixel Graphics',
                    value: 'Pixel Graphics'
                }
          ],

          onFilter: (value,record) =>(console.log(value, record.tags, _.difference(value,record.tags).length===0), record.tags && _.difference(value,record.tags).length===0),
      }

    ]



   // {
   //      title: 'tags',
   //      key: 'tags',
   //      dataIndex: 'tags',
   //      render: (tag, row) =>(
   //          row.tags ?
   //              console.log(row.tags)
   //          ( <span>
   //              {tag.map(tag => {
   //                let color = tag.length > 5 ? 'geekblue' : 'green';
   //
   //                return (
   //                  <Tag color={color} key={tag}>
   //                    {tag.toUpperCase()}
   //                  </Tag>
   //                );
   //              })}
   //            </span>) : (<span>loading</span>)  )}
   //
   //  ]
