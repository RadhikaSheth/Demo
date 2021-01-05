import React, { Fragment, useEffect, useState } from "react";
import "./App.css"
import axios from "axios"
const ShowSong = () => {
    const [songs, setSong] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/song/")
            .then((response) => {
                setSong(response.data);
            })
            .catch((err) =>{    
                console.log(err);
            })


    },[]);

    return(
        <Fragment>
            <h2>List of songs:</h2>
            <br />
            <br />
            {songs.map((song) => (
                <div key = {song.songName}>
                    <table className="show"> 
                        <tr>
                            <th>Song Name:</th>
                            <td>{song.songName}</td>
                        </tr>
                        <tr>
                            <th>Song Album:</th>
                            <td>{song.songAlbum}</td>
                        </tr>
                        <tr>
                            <th>Song Duration:</th>
                            <td>{song.songDuration}</td>
                        </tr>
                        <tr>
                            <th>Song Key:</th>
                            <td>{song.songKey}</td>
                        </tr>
                        <tr>
                            <th>Song Danceability:</th>
                            <td>{song.songDanceability}</td>
                        </tr>
                        <tr>
                            <th>Song Acousticness:</th>
                            <td>{song.songAcousticness}</td>
                        </tr>
                    </table>
                    <br />
                </div>
            ))}
        </Fragment>
    )
}
export default ShowSong;