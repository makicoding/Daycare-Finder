import React from 'react';
import { Link } from "react-router-dom";
import './search.css';
import LogoBar from '../components/logo_bar';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Search extends React.Component {

    handleInputChange = () => {

    }

    opensAtOrBefore = () => {

    }

    closesAtOrAfter = () => {

    }

    sortBy = () => {

    }

    searchButtonClick = () => {

    }

    render() {
        return (

            <div>
                <LogoBar></LogoBar>

                <p>Find Daycare near:</p>
				<input type="text" className="form-control" id="search-findDaycareNear" onChange={this.handleInputChange}	name="name" placeholder="Town, Address, Zipcode" autoComplete="off"></input>   

                <p>Opens at or before:</p>
                <select className="chosen-select" id="search-opensAtOrBefore" onChange={this.opensAtOrBefore}>
                    <option value="0730">7:30am</option>
                    <option value="0800">8:00am</option>
                    <option value="0830">8:30am</option>
                    <option value="0900">9:00am</option>
                </select>

                <p>Closes at or after:</p>
                <select className="chosen-select" id="search-closesAtOrAfter" onChange={this.closesAtOrAfter}>
                    <option value="1800">6:00pm</option>
                    <option value="1830">6:30pm</option>
                    <option value="1900">7:00pm</option>
                </select>

                <p>Sort by:</p>
                <select className="chosen-select" id="search-sortBy" onChange={this.sortBy}>
                    <option value="1">Open earliest</option>
                    <option value="2">Close latest</option>
                </select>

                <br></br>
                <br></br>

                <Link className="searchButton" onClick={this.searchButtonClick}>Search</Link>

            </div>
            
        );
    }

}

export default Search;