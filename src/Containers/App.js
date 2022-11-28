import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";
import { setSearchField } from '../actions'

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') //fetch - for servers, from window object
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ? //default = 0
            <h1 className="tc">Loading</h1>: //will return h1 when theres no value
            ( //else will return the values
            <div className="tc">  
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
            </div>
            );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
