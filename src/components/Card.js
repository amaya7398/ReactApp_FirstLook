import React from 'react'


export default function Card() {
    return (
        <div className="card text-center bg-dark mb-1 border border-info">
            <div className="card-body text-light">
                <h4 className="card-title">Card title</h4>
                <p className="card-text text-secondary">Lorem ipsum</p>
                <a href="#!" className="btn btn-outline-secondary ">
                    More information
                </a>
            </div>
        </div>
    )
}
