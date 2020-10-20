import React from 'react';
import { MovieItem } from './movieitem';

//Creating a movies class
export class Movies extends React.Component{
    //using the render method 
    render(){
        // Using map to break up the movies into different sections
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}