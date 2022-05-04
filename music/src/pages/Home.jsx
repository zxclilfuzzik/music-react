import React from 'react';

import Sidebar from '../components/Sidebar';
import TitleBar from '../components/TitleBar';
import TrackList from '../components/TrackList'
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';

import '../css/home.modules.css'


const Home = () => {

    return (
        <>
            <div className="container">

                <Sidebar />

                <div className = "content">
                    <TitleBar title = {"Home"} />

                    <div className = "state">
                        <Theme />

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
