import React, { Component } from "react";

import Sidebar from '../components/Sidebar';
import TrackList from '../components/TrackList'
import AlbumCover from '../components/AlbumCover';

import '../css/home.css'


const Home = () => {

    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="content">
                    <AlbumCover />
                </div>
            </div>
        </>
    );
}

export default Home;