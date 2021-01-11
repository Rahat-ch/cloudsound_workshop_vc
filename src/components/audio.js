import React, { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'
import ReactAudioPlayer from 'react-audio-player';

const Audio = ({ song }) => {
    const { id, title, artist } = song;
    const [mp3, setMp3] = useState('')
    useEffect(() => {
        const getMp3 = async () => {
            const mp3File = await Storage.get(id)
            console.log(mp3File)
            setMp3(mp3File)
        }
        getMp3()
    }, [id])
    return (
        <>
            <h1>{title}</h1>
            <h2>Artist: {artist}</h2>
            <ReactAudioPlayer
                src={mp3}
                controls
            />
        </>
    )
}

export default Audio;
