import logo from './file-spotify-logo-png-4.png';
import './App.css';
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

function App() {

  //state variables
  const [searchInput, setSearchInput] = useState("Pitbull") //default search will search for pitbull
  const [dropdownOption, setDropdownOption] = useState("Artists")
  const [artistTable, setArtistTable] = useState([])
  const [albumTable, setAlbumTable] = useState([])
  const [songTable, setSongTable] = useState([])
  const [userTable, setUserTable] = useState([])
  const [playlistTable, setPlaylistTable] = useState([])
  const [showA,setShowA]=useState(false)
  const [showB,setShowB]=useState(false)
  const [showC,setShowC]=useState(false)
  const [showD,setShowD]=useState(false)
  const [showE,setShowE]=useState(false)

  const navigate = useNavigate();

  //Make axios calls to Express server
  const getArtists = () => {
    Axios.get('http://localhost:3001/getArtists').then((response) => {
      setArtistTable(response.data)
    })
  }

  const getAlbums = () => {
    Axios.get('http://localhost:3001/getAlbums').then((response) => {
      setAlbumTable(response.data)
    })
  }

  const getSongs = () => {
    Axios.get('http://localhost:3001/getSongs').then((response) => {
      setSongTable(response.data)
    })
  }

  const getUsers = () => {
    Axios.get('http://localhost:3001/getUsers').then((response) => {
      setUserTable(response.data)
    })
  }

  const getPlaylists = () => {
    Axios.get('http://localhost:3001/getPlaylists').then((response) => {
      setPlaylistTable(response.data)
    })
  }

  //Setup structure for tables
  const Artists = () => ( 
    <table className="table-hide">
      <tr>
        <th>Artist Name</th>
        <th>Followers</th>
        <th>Popularity</th>
        <th>Genre</th>
        <th>Image</th>
      </tr>
      {artistTable.map((val) => { return (
      <tr>
        <td>{val.artistName}</td>
        <td>{val.followers}</td>
        <td>{val.popularity}</td>
        <td>{val.genre}</td>
        <td style={{backgroundSize:"cover", backgroundImage:`url(${val.image})`}}></td>
      </tr> )
      })}
     </table>
  )

  const Albums = () => ( 
    <table className="table-hide">
      <tr>
        <th>Album Name</th>
        <th>Release Date</th>
        <th>Track Count</th>
        <th>Album Cover</th>
      </tr>
      {albumTable.map((val) => { return (
      <tr>
        <td>{val.albumName}</td>
        <td>{val.releaseDate}</td>
        <td>{val.trackNumber}</td>
        <td style={{backgroundSize:"cover", backgroundImage:`url(${val.albumCover})`}}></td>
      </tr> )
      })}
     </table>
  )

  const Songs = () => ( 
    <table className="table-hide">
      <tr>
        <th>Song Name</th>
        <th>Track Number</th>
        <th>Explicit?</th>
        <th>Length</th>
      </tr>
      {songTable.map((val) => { return (
      <tr>
        <td>{val.songName}</td>
        <td>{val.trackNumber}</td>
        <td>{val.isExplicit}</td>
        <td>{val.durationMS}</td>
      </tr> )
      })}
     </table>
  )

  const Users = () => ( 
    <table className="table-hide">
      <tr>
        <th>User Name</th>
        <th>Joined Date</th>
        <th>Age</th>
      </tr>
      {userTable.map((val) => { return (
      <tr>
        <td>{val.UserName}</td>
        <td>{val.JoinedDate}</td>
        <td>{val.Age}</td>
      </tr> )
      })}
     </table>
  )

  const Playlists = () => ( 
    <table className="table-hide">
      <tr>
        <th>Playlist Name</th>
        <th>Date Created</th>
      </tr>
      {playlistTable.map((val) => { return (
      <tr>
        <td>{val.PlaylistName}</td>
        <td>{val.DateCreated}</td>
      </tr> )
      })}
     </table>
  )

  const handleOptionChange = (e) => {
    setDropdownOption(e.target.value)
  }

  const submitChanges = () => {
    console.log(searchInput)
    console.log(dropdownOption)

    navigate("/results-page/"+searchInput,
      {
        state: {
          tableOption: dropdownOption
        }
      }
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <p className="Title">
          Spotify Database Search
        </p>
        <div>
        <input 
            className="App-input" 
            placeholder="Search for Songs, Artists, Playlists, Albums, or Users!" 
            type="text" 
            name="albumName" 
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
          />
          <select 
            className="dropdown"
            value={dropdownOption}
            onChange={handleOptionChange} 
          >
            <option value="Artists">Artists</option>
            <option value="Albums">Albums</option>
            <option value="Songs">Songs</option>
            <option value="Users">Users</option>
            <option value="Playlists">Playlists</option>
          </select>
        </div>
        <button className="App-input" onClick={submitChanges}>Submit</button>
      </header>
      <body className="App-body">
          <div className="button-div">
            <a className="button-text" >Artists</a>
            <br/>
            <button className="button1" onClick={()=>{setShowA(!showA); getArtists();}}></button>
          </div>
          <div className="button-div">
            <a className="button-text" >Albums</a>
            <br/>
            <button className="button2" onClick={()=>{setShowB(!showB); getAlbums();}}></button>
          </div>
          <div className="button-div">
            <a className="button-text" >Songs</a>
            <br/>
            <button className="button3" onClick={()=>{setShowC(!showC); getSongs();}}></button>
          </div>
          <div className="button-div">
            <a className="button-text" >Users</a>
            <br/>
            <button className="button4" onClick={()=>{setShowD(!showD); getUsers();}}></button>
          </div>
          <div className="button-div">
            <a className="button-text" >Playlists</a>
            <br/>
            <button className="button5" onClick={()=>{setShowE(!showE); getPlaylists();}}></button>
          </div>
      </body>
      <body className="App-body2">
        {showA?<Artists/>:null}
        {showB?<Albums/>:null}
        {showC?<Songs/>:null}
        {showD?<Users/>:null}
        {showE?<Playlists/>:null}
      </body>
    </div>
  );
}

export default App;
