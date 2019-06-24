import React, { Component } from 'react';


import { Tag, Input, Icon } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';

import _ from 'lodash'

let filterObj={

                  text: 'Comedy',
              value: ['Comedy']

}

export default class EditableTagGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            inputVisible: false,
            inputValue: '',


        };
        this.handleInputConfirm = this.handleInputConfirm.bind(this)
    }
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  async handleInputConfirm(){
    const { inputValue } = this.state;
    let { tags } = this.state;
    var filter = filterObj.value
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
       filter.push(inputValue)
        console.log('IN ADD: ',filterObj)
    }
    // console.log(tags);
    // console.log(columns[2].filters[0].value)
      console.log(filterObj)
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: 'from',
              duration: 100,
              onComplete: e => {
                e.target.style = '';
              },
            }}
            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}





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
        title: 'Genre',
        key: 'genre',
        dataIndex: 'genre',


        render: (genre, row, table) =>(
            row.genre ?
            <span>
        {genre.map(genre => {
          let color = genre.length > 5 ? 'geekblue' : 'green';

          return (
            <Tag color={color} key={genre}>
              {genre.toUpperCase()}
            </Tag>
          );
        })}
      </span>

                : false ),

            filters: [
              {
                  text: 'Adventure',
              value: ['Adventure']
              },

          ],

          onFilter: (value,record) =>(console.log(value, record.genre, _.difference(value,record.genre).length===0), record.genre && _.difference(value,record.genre).length===0),
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',


        render: (tags, row, table) =>(
            row.tags ?
            <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </span>

                : false ),

            filters: [
             filterObj

          ],

          onFilter: (value,record) =>(console.log( value,'TAGS: ',  record.tags, _.difference(value,record.tags).length===0), record.tags && _.difference(value,record.tags).length===0),
      }


    ]

