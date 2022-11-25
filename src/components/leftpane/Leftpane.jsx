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
                    <NavLink to="/"><span>{home} Home</span></NavLink>
                    <NavLink to="/explore"><span>{explore}Explore</span></NavLink>
                    <NavLink to="/notifications"><span> {notify}Notifications</span></NavLink>
                    <NavLink to="/messages"><span>{message}Messages</span></NavLink>
                    <NavLink to="/profile"><span>{profile}Profile</span></NavLink>
                    <button className='more'><span>{more}More</span></button>
                </nav>
                <button className='tweet'>Tweet</button>


                <footer>
                    <button className='account'>
                        <div className='photo'>
                            <img alt="dennis kiprop" src="https://pbs.twimg.com/profile_images/1433372333369085954/JmrP-zho_x96.jpg" />
                        </div>
                        <div>
                            <div className='name'>Dennis Kiprop</div>
                            <div className='username'>@mairor</div>
                        </div>
                    </button>
                </footer>

            </div>
        </div>
    )
}

export default Leftpane