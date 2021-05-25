import React, { Component } from 'react'
import InforCard from './Info-Card'


export default class Card extends Component {
    render(){
        return (
            <div className="card text-center bg-dark mb-1 border border-info">
                <div className="card-body text-info">
                    <InforCard info={this.props.info} />
                </div>
            </div>
        )
    }
}
