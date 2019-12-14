import React from 'react';
import { Link } from "react-router-dom";
import './splash.css';
import LogoBar from '../components/logo_bar';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Splash extends React.Component {

    splashButton1 = () => {
        console.log("Guest button clicked!")
    }

    splashButton2 = () => {
        console.log("Sign Up button clicked!")
    }

    splashButton3 = () => {
        console.log("Login button clicked!")
    }

    render() {
        return (

            <div>
                <LogoBar></LogoBar>
                <br></br>
                <br></br>

                <div className="splashButtonsContainer">
                    <Link className="splashButton" onClick={this.splashButton1}>Guest</Link>
                    <br></br>
                    <br></br>
                    <Link className="splashButton" onClick={this.splashButton2}>Sign Up</Link>
                    <br></br>
                    <br></br>
                    <Link className="splashButton" onClick={this.splashButton3}>Login</Link>
                </div>



                {/* <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_1.png"} alt={"Sketch Screen"} />

                    <Link className="p1Button1" onClick={this.splashButton1Click}></Link>

                    <Link className="p1Button2" onClick={this.splashButton2Click}></Link>

                    <Link className="p1Button3" onClick={this.splashButton3Click}></Link>
                </div> */}

            </div>
            
        );
    }

}

export default Splash;