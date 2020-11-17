import React from 'react';
// importing card from bootstrap website
import Card from 'react-bootstrap/Card';

//Creating a MovieItem class
export class MovieItem extends React.Component {
    //using the render method 
    render() {
        return (
            <div class="container">

                <Card style={{ width: '14rem' }}>
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
                </Card>

            </div>
        )
    }
}