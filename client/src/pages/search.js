import React from "react";
import { Link } from "react-router-dom";
import "./search.css";
import LogoBar from "../components/logo_bar";
import { Container, Row, Col } from "../components/grid";
import "../components/dropdown/dropdown.css";
import "../components/input_box/inputBox.css";
import "../components/button/button.css";
import "../components/horizontal_rule/horizontalRule.css";

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
        console.log ("You have clicked the search button!")
    }

    render() {
        return (

            <div>
                <LogoBar></LogoBar>

                <br></br>

                <Container>
                    <Row>
                        <Col size="col-md-3">
                            <p>Find Daycare near:</p>
                            <input type="text" className="form-control inputBox" id="search-findDaycareNear" onChange={this.handleInputChange}	name="name" placeholder="Town, Address, Zipcode" autoComplete="off"></input>
                            <br></br>
                        </Col>

                        <Col size="col-md-3">
                            <p>Opens at or before:</p>
                            <select className="chosen-select dropdown" id="search-opensAtOrBefore" onChange={this.opensAtOrBefore}>
                                <option value="0730">7:30am</option>
                                <option value="0800">8:00am</option>
                                <option value="0830">8:30am</option>
                                <option value="0900">9:00am</option>
                            </select>
                            <br></br>
                            <br></br>
                        </Col> 

                        <Col size="col-md-3">
                            <p>Closes at or after:</p>
                            <select className="chosen-select dropdown" id="search-closesAtOrAfter" onChange={this.closesAtOrAfter}>
                                <option value="1800">6:00pm</option>
                                <option value="1830">6:30pm</option>
                                <option value="1900">7:00pm</option>
                            </select>
                            <br></br>
                            <br></br>
                        </Col> 

                        <Col size="col-md-3">
                            <p>Sort by:</p>
                            <select className="chosen-select dropdown" id="search-sortBy" onChange={this.sortBy}>
                                <option value="1">Open earliest</option>
                                <option value="2">Close latest</option>
                            </select>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Col> 
                    </Row>

                    <Row>
                        <Col size="col-md-12">
                            <button className="searchButton" onClick={this.searchButtonClick}>Search</button>
                        </Col>
                    </Row>

                    <hr className="hr1"></hr>
                </Container>

            </div>
            
        );
    }

}

export default Search;