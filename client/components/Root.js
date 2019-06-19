import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import GameContainer from './GameContainer'

export class Root extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <Router>
                <div id = 'main'>
                    <h1>GameHutch</h1>
                    <GameContainer/>
                </div>
            </Router>


        )
    }
}
