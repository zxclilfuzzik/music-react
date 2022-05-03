import React from 'react';

import Sidebar from '../components/Sidebar';
import TrackList from '../components/TrackList'
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';
import UITextField from "../components/ui/UITextField";
import UIButton from "../components/ui/UIButton";

import '../css/home.modules.css'


const Home = () => {

    return (
        <>
            <div className="container">

                <Sidebar />

                <div className = "content">

                    <p className='label-text-one'>Home</p>

                    <UITextField />

                    <div className = "state">

                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />

                    </div>

                    <div className = "playlists">
                      <TrackList />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;
