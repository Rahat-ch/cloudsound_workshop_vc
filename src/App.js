import React, { useEffect, useState } from 'react'
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Song } from './models';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import UploadForm from './components/uploadForm'
import Audio from './components/audio'

function App() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const getSongs = async () => {
            const models = await DataStore.query(Song);
            setSongs(models)
        }
        getSongs()

    }, [])
    return (
        <div className="App">
            <h1>The Cloud Sound</h1>
            <AmplifySignOut />
            <UploadForm />
            {songs.map(song => (
                <Audio song={song} />
            ))}
        </div>
    );
}

export default withAuthenticator(App);
