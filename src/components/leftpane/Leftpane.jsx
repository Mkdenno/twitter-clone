import React from 'react'
import { NavLink } from 'react-router-dom'
import './leftpane.scss'
import { twitter, home, explore, notify, message, profile, more } from './icons'

const Leftpane = () => {
    return (
        <div className='left-pane'>
            <div className='container'>
                <header>{twitter}</header>
                <nav>
                    <NavLink to="/" exact activeClassName="selected"><span>{home} Home</span></NavLink>
                    <NavLink to="/explore" activeClassName="selected"><span>{explore}Explore</span></NavLink>
                    <NavLink to="/notifications" activeClassName="selected"><span> {notify}Notifications</span></NavLink>
                    <NavLink to="/messages" activeClassName="selected"><span>{message}Messages</span></NavLink>
                    <NavLink to="/profile" activeClassName="selected"><span>{profile}Profile</span></NavLink>
                    <button className='more' activeClassName="selected"><span>{more}More</span></button>
                </nav>
                <button className='tweet'>Tweet</button>


                <footer>
                    <button className='account'>
                        <div className='photo'>
                            <img alt="dennis kiprop" src="https://pbs.twimg.com/profile_images/1433372333369085954/JmrP-zho_x96.jpg" />
                        </div>
                        <div>
                            <div className='name'>Dennis Kiprop</div>
                            <div className='username'>@masiror</div>
                        </div>
                    </button>
                </footer>

            </div>
        </div>
    )
}

export default Leftpane