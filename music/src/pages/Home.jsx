import React from 'react';

import Sidebar from '../components/Sidebar';
import TrackList from '../components/TrackList'
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';
import UITextField from "../components/ui/UITextField";
import UIButton from "../components/ui/UIButton";

import '../css/home.css'


const Home = () => {

    return (
        <>
            <div className="container">

                <Sidebar />

                <div className = "content">

                    <h1>Home</h1>

                    <div className = "state">

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
