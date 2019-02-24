import React, { Component } from 'react';

//Assets
import AEvans from '../assets/channels/AEvans.jpg'
import BAppetit from '../assets/channels/BAppetit.jpg'
import GInformer from '../assets/channels/GInformer.jpg'
import h3h3 from '../assets/channels/h3h3.jpg'
import ign from '../assets/channels/IGN.jpg'
import MBrownlee from '../assets/channels/MBrownlee.jpg'
import Overwatch from '../assets/channels/OW.jpg'
import Tastemade from '../assets/channels/Tastemade.jpg'
import Tasty from '../assets/channels/Tasty.jpg'
import UTherapy from '../assets/channels/UTherapy.jpg'
import Wired from '../assets/channels/Wired.jpg'

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar bg-white sd-div top-fixed'>
                <div className="navigation icon-set mar-v-10">
                    <div className="sidebar-item icon-def w-medium c-medium s-14"><span className="mdi mdi-home feed-align mar-h-12"></span>Home</div>
                    <div className="sidebar-item icon-def w-medium c-medium s-14"><span className="mdi mdi-fire feed-align mar-h-12"></span>Trending</div>
                    <div className="sidebar-item icon-def w-medium c-medium s-14"><span className="mdi mdi-history feed-align mar-h-12"></span>History</div>
                    <div className="sidebar-item icon-def w-medium c-medium s-14"><span className="mdi mdi-playlist-play feed-align mar-h-12"></span>Playlists</div>
                </div>
                <div className="ln-light"></div>
                <div className="navigation subs-set mar-v-10">
                    <div className="sidebar-item icon-def active w-medium c-medium s-14"><span className="mdi mdi-youtube-subscription feed-align mar-h-12"></span>Subscriptions</div>
                    <div className="subscription-container mar-v-10">
                        {this.drawSubs()}
                    </div>
                </div>
            </div>
        );
    }

    state = {

    }

    drawSubs = () => {
        var subs = [
            {
                name: 'Austin Evans',
                img: AEvans,
                id: 'UCXGgrKt94gR6lmN4aN3mYTg'
            },
            {
                name: 'Bon Appétit',
                img: BAppetit,
                id: 'UCbpMy0Fg74eXXkvxJrtEn3w'
            },
            {
                name: 'Game Informer',
                img: GInformer,
                id: 'UCK-65DO2oOxxMwphl2tYtcw'
            },
            {
                name: 'H3H3 Productions',
                img: h3h3,
                id: 'UCDWIvJwLJsE4LG1Atne2blQ'
            },
            {
                name: 'IGN',
                img: ign,
                id: 'UCKy1dAqELo0zrOtPkf0eTMw'
            },
            {
                name: 'Marques Brownlee',
                img: MBrownlee,
                id: 'UCBJycsmduvYEL83R_U4JriQ'
            },
            {
                name: 'PlayOverwatch',
                img: Overwatch,
                id: 'UClOf1XXinvZsy4wKPAkro2A'
            },
            {
                name: 'Tastemade',
                img: Tastemade,
                id: 'UCqf_rFCGLODeUcw3p_Abr-A'
            },
            {
                name: 'Tasty',
                img: Tasty,
                id: 'UCJFp8uSYCjXOMnkUyb3CQ3Q'
            },
            {
                name: 'Unbox Therapy',
                img: UTherapy,
                id: 'UCsTcErHg8oDvUnTzoqsYeNw'
            },
            {
                name: 'Wired',
                img: Wired,
                id: 'UCftwRNsjfRo08xYE31tkiyw'
            }
        ]
    
        return subs.map(sub => {
            return (
                <a href={'?channel='+sub.id} key={sub.id} className="sidebar-item icon-sub icon-wrapper mar-v-4">
                    <img className="channel-icon imgs-medium mar-h-12" src={sub.img} alt=""/>
                    <p className="channel-name w-medium c-medium s-14">{sub.name}</p>
                </a>
            )
        })
    }
}

export default Sidebar;