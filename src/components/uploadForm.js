import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Song } from '../models';
import { Storage } from 'aws-amplify';

const UploadForm = () => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [mp3, setMp3] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const song = await DataStore.save(
            new Song({
                title,
                artist
            })
        );
        await Storage.put(song.id, mp3)
        alert('song added')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
            <label for="artist">Artist:</label>
            <input type="text" name="artist" id="artist" onChange={e => setArtist(e.target.value)} />
            <label for="mp3">Upload song:</label>
            <input type="file" name="mp3" accept=".mp3" onChange={e => setMp3(e.target.files[0])} />
            <input type="submit" />
        </form>
    )
}

export default UploadForm