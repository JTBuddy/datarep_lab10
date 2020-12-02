import React from 'react';
//importing axios
import axios from 'axios';

// Creating a create class
export class Edit extends React.Component {

    constructor() {
        super();

        // Binding all the events 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //lifecycle hook - gets fired when the component becomes active
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' +this.props.match.params.id)
        .then(response => {
            this.setState({
                _id: response.data._id, 
                Title: response.data.title,
                Year: response.data.year,
                Poster: response.data.poster
            })
        })

        //used to display errors if there is any
        .catch((error) => {
            console.log(error);
        });
    }

    // Methods get called when a value is placed
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        })
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }

    // Submit button pulls the values of Title, Year and Poster of the data that is entered
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

        //sending data to the server
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/movies/' +this.state._id, newMovie)
        .then(res => {
            console.log(res.data);
        })
        .catch();

        // //making post request asynchronous 
        // axios.post('http://localhost:4000/api/movies', newMovie)
        // //run if everything works
        // .then((res) => {
        //     console.log(res);
        // })
        // //log error to the console
        // .catch((err)=> {
        //     console.log(err);
        // });
    }

    // Using the render method 
    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    {/* Adding movie title */}
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type="text" className="form-control" value={this.state.value} onChange={this.onChangeTitle}></input>
                    </div>

                    {/* Adding movie year */}
                    <div className="form-group">
                        <label>Add Movie Year</label>
                        <input type="text" className="form-control" value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>

                    {/* Adding movie poster */}
                    <div className="form-group">
                        <label>Add Movie Poster</label>
                        <textarea type="text" className="form-control" value={this.state.Poster} onChange={this.onChangePoster}></textarea>
                    </div>

                    {/* Button */}
                    <div className="form-group">
                        <input type="submit" value="Edit Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}