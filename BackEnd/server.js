const express = require('express')
const app = express()
//set the port to 4000 so the server.js doesnt clash with react app at port 3000
const port = 4000
//importing cors
const cors = require('cors')
const bodyParser =  require("body-parser")
//importing mongoose
const mongoose = require('mongoose');

app.use(cors())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Accesss-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//connection to mongoose using connection string
const ConnectionString = 'mongodb+srv://James:IhgYHoVkw3u1fQ2q@cluster0.fkgd4.mongodb.net/movies?retryWrites=true&w=majority'
mongoose.connect(ConnectionString, {useNewUrlParser: true});

//generating a Schema
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

var MovieModel = mongoose.model("movie", movieSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//get request
app.get('/api/movies', (req, res) => {
    
    //creating a constant
    // const mymovies = [
    //     {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         }
    // ]; 

    // Getting the data in the mongoose database
    MovieModel.find((err, data) => {
        res.json(data);
    })

    // res.status(200).json({
    //     message: "Everything is okay",
    //     movies:mymovies});
})

// search function
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.post('/api/movies', (req, res) =>{
    console.log('Movie Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    MovieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster,
    })

    res.send('Item Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})