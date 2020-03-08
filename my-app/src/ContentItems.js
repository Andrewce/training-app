import React from 'react';
import './App.css';


export default class ContentItems extends React.Component {
    render() {
        return <li className="App-item">
            {this.props.eId}) {this.props.name}
            <br/>Salary: ${this.props.salary} 
            <br/>
            <br/>
            <img src="https://raw.githubusercontent.com/Andrewce/Pic/master/user.png" alt="-img..-" width="200" height="200"/>
            <br/>

            age: {this.props.age}
        </li>
        
    }
} 
//change