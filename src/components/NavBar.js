import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
            <a href="#!" className="navbar-brand">React First Look</a>
            <div className="navbar navbar-nav">
                <NavLink to="/home" className="nav-link">Tasks</NavLink>
                <NavLink to="/posts" className="nav-link">Posts</NavLink>
            </div>
        </nav>
    )
}