import React, { Component } from 'react';
import logo from './logo.svg';
import './ReactTemplate.css';

export default class ReactTemplate extends Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"></img>
                    <p>React Template</p>
                </header>
            </div>
        )
    }
}
