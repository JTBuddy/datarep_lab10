import React from 'react';
import { Movies } from './movies';
//Importing axios after it was installed in the command prompt
import axios from 'axios';

//Creating a read class
export class Read extends React.Component {

    state = {
        //Creating an object named movies
        movies: []
    };

    //Gets called when every our component is active
    componentDidMount() {
        //Retrieve information from the url provided
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            // First call back function
            .then(
                //The data is called a response
                (response) => {
                    //Updating the state with the data that came back
                    this.setState({ movies: response.data.Search })
                }
            )
            //Second call back function (rejected state) 
            .catch((error) => {
                //Log error to the console if there is a problem
                console.log(error)
                //End of .catch
            });
        //End of componentDidMount
    }

    render() {
        return (
            <div>
                <h1>This is the read component.</h1>

                {/* creating the object movies and passing it to the component */}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}