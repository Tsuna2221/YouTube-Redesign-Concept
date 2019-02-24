import React, { Component } from 'react';

//Assets
import YouTube from '../assets/YouTube.svg'

class Headeer extends Component {
    render() {
        return (
            <header className='header sd-div bg-white top-fixed'>
                <span className="mdi mdi-menu menu-btn head-btn"></span>

                <div className="main-header">
                    <img className="main-header__yt-logo" src={YouTube} alt=""/>

                    <form className="main-header__search-form">
                        <input type="text" className="search-input sd-input s-14 c-medium" placeholder="Search"/>
                        <span className="mdi mdi-arrow-right search-btn sd-input"></span>
                    </form>
                    
                    <div className="main-header__account">
                        <span className="mdi mdi-video"></span>
                        <p className="account-name c-medium w-medium s-14">Tsuna2221</p>
                        <div className="account-icon"></div>
                    </div>
                </div>

                <span className="mdi mdi-settings settings-btn head-btn"></span>
            </header>
        );
    }

    state = {

    }
}

export default Headeer;