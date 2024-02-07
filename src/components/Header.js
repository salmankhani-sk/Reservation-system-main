import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'


const Header = () => {
    return(
        <header className='header'>
            <section>
                <div className='banner'>
                <h2>LittleLemon</h2>
                <h3>Chicago</h3>
                <p>Why do you check all this? What do you gain from this? Just put 100%, call it a day 
                    and play Quake III Arena, StarCraft... or whatever you do to unwind :D</p>
                    <Link to ="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt=''/>
                </div>
            </section>
        </header>
    );
};

export default Header;
