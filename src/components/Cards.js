import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
    render(){
        return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        this.props.info.map ( card => (
                            <div className="d-flex align-self-stretch col-md-4 " key={card.id}>
                                <Card info={card} title={card.title} body={card.body} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
