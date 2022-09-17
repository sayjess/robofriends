import React, { Component } from "react";
import CardList from "../Components/CardList";
//import { robots } from './Robot'; //for multiple value need to destructure
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
//import ErrorBoundary from "../Components/ErrorBoundary";

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') //fetch - for servers, from window object
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        
    }

    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ? //default = 0
            <h1 className="tc">Loading</h1>: //will return h1 when theres no value
            ( //else will return the values
            <div className="tc">  
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                
            </div>
            );
    }
}

export default App;
