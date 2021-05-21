import React, { Component } from 'react'


export default class Card extends Component {
    render(){
        return (
            <div className="card text-center bg-dark mb-1 border border-info">
                <div className="card-body text-light">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text text-secondary">{this.props.body}</p>
                    <a href="#!" className="btn btn-outline-secondary ">
                        More information
                    </a>
                </div>
            </div>
        )
    }
}
