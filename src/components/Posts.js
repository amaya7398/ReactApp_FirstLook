import React, { Component } from 'react'
import Cards from './Cards';
import './Posts.css'

export default class Posts extends Component {

    state = {
        posts : []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts: data})
    }

    render() {
        return (
            <div className="Post">
                <h1>Posts</h1>
                <Cards posts={this.state.posts} />
            </div>
        )
    }
}
