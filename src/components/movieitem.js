import React from 'react';
// importing card from bootstrap website
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//Creating a MovieItem class
export class MovieItem extends React.Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    //Delete Method
    DeleteMovie(e){
        //Prevents method from getting called every time the page is loaded 
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id);

        //Calling a delete and passing up the id
        axios.delete("http://localhost:4000/api/movies/" +this.props.movie._id)
        .then(()=> {
            //Invoking the function
            this.props.ReloadData();
        })
        .catch();
    }

    //using the render method 
    render() {
        return (
            <div class="container">

                <Card style={{ width: '15rem'}}>
                    {/* Displaying the movie Poster image */}
                    <Card.Img variant="top" src={this.props.movie.poster} width="220" height="300" />
                    <Card.Body>
                        {/* Displaying the movie Title */}
                        <Card.Title>{this.props.movie.title}</Card.Title>
                        <Card.Text>
                            {/* Diplaying the movie Year */}
                            {this.props.movie.year}
                        </Card.Text>
                    </Card.Body>
                    {/* Delete Button  */}
                    <Button variant="danger" onClick={this.DeleteMovie}> Delete </Button>
                </Card>

            </div>
        )
    }
}