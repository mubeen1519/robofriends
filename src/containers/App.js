import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searhField : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce => responce.json())
        .then(users => this.setState({robots : users}));
    }

    onSearchChange = (event) =>{
        this.setState({searhField: event.target.value})
    }

    render() {
        const {robots, searhField} = this.state;
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searhField.toLowerCase());
        })
        if(!robots.length){
           return <h1 className="tc">LOADING</h1>
        } else {
        return (
            <div className="tc" >
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange ={this.onSearchChange} />

                <Scroll>
                <CardList robots={filtered} />
                </Scroll>
            </div>
        );
        }
    }

}

export default App;