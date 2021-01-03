import React from 'react';

import './Homepage.scss';

import MenuItem from '../../components/menu-item/menu-item'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className='directory-menu'>
                <MenuItem title="HATS" />
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>JACKETS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SNEAKERS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MEN</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>WOMEN</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;