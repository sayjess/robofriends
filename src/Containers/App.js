import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";
import { requestRobots, setSearchField } from '../actions'

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const { isPending, robots, searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? //default = 0
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
