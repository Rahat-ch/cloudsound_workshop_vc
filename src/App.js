import React, { useEffect, useState } from 'react'
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Song } from './models';


function App() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const getSongs = async () => {
            const models = await DataStore.query(Song);
            console.log(models[0].title);
            setSongs(models)
        }
        getSongs()
    }, [])
    return (
        <div className="App">
            <h1>The Cloud Sound</h1>
            {songs.map(song => (
                <h2>{song.title}</h2>
            ))}
        </div>
    );
}

export default App;
