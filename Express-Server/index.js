const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'spotify'
});

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

//get all artists
app.get("/getArtists", (req, res) => {
    const sqlSelect = "Select * from artists limit 500;"
    db.query(sqlSelect, (err, result) => {
        console.log(err)
        res.send(result);
    })
});

//get all albums
app.get("/getAlbums", (req, res) => {
    const sqlSelect = "Select * from albums limit 500;"
    db.query(sqlSelect, (err, result) => {
        console.log(err)
        res.send(result);
    })
});

//get all songs
app.get("/getSongs", (req, res) => {
    const sqlSelect = "Select * from songs limit 500;"
    db.query(sqlSelect, (err, result) => {
        console.log(err)
        res.send(result);
    })
});

//get all users
app.get("/getUsers", (req, res) => {
    const sqlSelect = "Select * from users limit 500;"
    db.query(sqlSelect, (err, result) => {
        console.log(err)
        res.send(result);
    })
});

//get all playlists
app.get("/getPlaylists", (req, res) => {
    const sqlSelect = "Select * from playlists limit 500;"
    db.query(sqlSelect, (err, result) => {
        console.log(err)
        res.send(result);
    })
});

//search for artist by name
app.get('/getArtists/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT * FROM Artists WHERE artistName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for album by name
app.get('/getAlbums/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT * FROM Albums WHERE albumName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for song by name
app.get('/getSongs/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT * FROM Songs WHERE songName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for user by name
app.get('/getUsers/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT * FROM Users WHERE UserName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for Playlist by name
app.get('/getPlaylists/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT * FROM Playlists WHERE PlaylistName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for albums by artist
app.get('/getArtistAlbums/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT Ar.ArtistName, Al.albumName, Al.albumCover, Al.releaseDate, Al.trackNumber FROM Albums Al LEFT JOIN Artists Ar ON AL.ArtistId = Ar.ArtistID WHERE Ar.ArtistName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for songs by artist
app.get('/getSongArtist/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT Ar.ArtistName, Al.albumName, Al.albumCover, S.songName, S.trackNumber, S.isExplicit, S.durationMS FROM Songs S  LEFT JOIN Albums Al ON S.AlbumId = Al.AlbumId LEFT JOIN Artists Ar ON AL.ArtistId = Ar.ArtistID WHERE Ar.ArtistName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

//search for songs by album
app.get('/getSongAlbum/:id', (req, res) => {
    const { id } = req.params;

    const sqlSelect = "SELECT Ar.ArtistName, Al.albumName, Al.albumCover, S.songName, S.trackNumber, S.isExplicit, S.durationMS FROM Songs S  LEFT JOIN Albums Al ON S.AlbumId = Al.AlbumId LEFT JOIN Artists Ar ON AL.ArtistId = Ar.ArtistID WHERE Al.AlbumName LIKE '%"+id+"%';"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    })
});

app.post("/test", (req, res) => {

    const testName = req.body.name
    console.log(req.body)

    const sqlInsert = "Insert into test (Testname) values (?);"
    db.query(sqlInsert, [testName], (err, result) => {
        // console.log(err)
        // console.log(result)
        res.send("hello world")
    })
});

app.listen(3001, () => {
    console.log("running on port 3001");
});