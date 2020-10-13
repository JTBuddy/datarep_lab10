import React from 'react';

//Creating a content class
export class Content extends React.Component {
    //using the render method 
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}