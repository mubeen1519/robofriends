import React, { useState , useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';


function App () {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searhField : ''
    //     }
    // }

    const[robots, setRobots] = useState([])
    const[searhField, setSearchField] = useState('')

    // this react same as componentdidmount lifecycle method to rerender everytime when app open 
    //this is hooks method introduced in react 16 version
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce => responce.json())
        .then(users => setRobots(users));
    });

    const onSearchChange = (event) =>{
        setSearchField(event.target.value)
    }

        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searhField.toLowerCase());
        })
        if(!robots.length){
           return <h1 className="tc">LOADING</h1>
        } else {
        return (
            <div className="tc" >
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange ={onSearchChange} />

                <Scroll>
                <CardList robots={filtered} />
                </Scroll>
            </div>
        );
        }

}

export default App;