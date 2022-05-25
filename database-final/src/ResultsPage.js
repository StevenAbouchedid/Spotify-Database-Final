import logo from './file-spotify-logo-png-4.png';
import './App.css';
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, useParams  } from "react-router-dom";
import Axios from 'axios';
import fileDownload from 'js-file-download'

function ResultsPage() {

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
  const [reload,setReload]=useState(false)


  const navigate = useNavigate();

  const { param } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    console.log(param)
    console.log(state.tableOption)

    switch(state.tableOption) {
      case "Artists":
        Axios.get('http://localhost:3001/getArtists/'+param).then((response) => {
          setArtistTable(response.data)
          setShowA(!showA)
        })
        break;
      case "Albums":
        Axios.get('http://localhost:3001/getAlbums/'+param).then((response) => {
          setAlbumTable(response.data)
          setShowB(!showB)
        })
        break;
      case "Songs":
        Axios.get('http://localhost:3001/getSongs/'+param).then((response) => {
          setSongTable(response.data)
          setShowC(!showC)
        })
        break;
      case "Users":
        Axios.get('http://localhost:3001/getUsers/'+param).then((response) => {
          setUserTable(response.data)
          setShowD(!showD)
        })
        break;
      case "Playlists":
        Axios.get('http://localhost:3001/getPlaylists/'+param).then((response) => {
          setPlaylistTable(response.data)
          setShowE(!showE)
        })
        break;
      default:
        console.log("whoops")
    }
  }, [reload]) //EMPTY ARRAY HERE MEANS USE EFFECT WILL ONLY BE CALLED ON PAGE LOAD, put dependencies to say when to run useEffect

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
    setShowA(false)
    setShowB(false)
    setShowC(false)
    setShowD(false)
    setShowE(false)
    setReload(!reload)
  }

  const exportTable = () => {
    let CSV = ""

    if (showA) {
        CSV = CsvFromTable(artistTable)
    } else if (showB) {
        CSV = CsvFromTable(albumTable)
    } else if (showC) {
        CSV = CsvFromTable(songTable)
    } else if (showD) {
        CSV = CsvFromTable(userTable)
    } else if (showE) {
        CSV = CsvFromTable(playlistTable)
    }



    console.log(CSV)
  }

  const CsvFromTable = (arr) => {
    let CSV = ""

    for (let i = 0; i <= arr.length; ++i) {
        if (i == 0) {//first loop gets data from headers
            for (let j = 0; j < Object.keys(arr[0]).length; ++j) {
                CSV += Object.keys(arr[0])[j]
                if (j == Object.keys(arr[0]).length-1) {
                    CSV += "\n"
                } else {
                    CSV += ","
                }
            }
        } else {//rest of the iterations get data from the fields of the table
            for (let j = 0; j < Object.keys(arr[0]).length; ++j) {
                CSV += arr[i-1][Object.keys(arr[0])[j]]
                if (j == Object.keys(arr[0]).length-1) {
                    CSV += "\n"
                } else {
                    CSV += ","
                }
            }
        }
    }

    return CSV;
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
        <button className="App-input" onClick={exportTable}>Export as CSV</button>
      </header>
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

export default ResultsPage;
