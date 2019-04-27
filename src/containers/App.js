import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => { // change to arrow function, otherwise 'this' refers to searchBox input class
        this.setState({searchField: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({cats: users})})
    }

    render() {
        const {cats, searchField} = this.state
        const filteredCats = cats.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (cats.length===0) ?
            <h1>Loading...</h1> :
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList cats={filteredCats}/>
                </Scroll>
            </div>
    }
}
export default App;