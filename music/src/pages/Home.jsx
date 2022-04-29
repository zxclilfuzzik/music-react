import React, { Component } from "react";

import Sidebar from '../components/Sidebar';
import TrackList from '../components/TrackList'
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';

import '../css/home.css'


const Home = () => {

    return (
        <>
            <div className="container">

                <Sidebar />

                <div className = "content">
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
