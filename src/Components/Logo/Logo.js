import React from "react";
import Tilt from 'react-tilt';
import "./Logo.css";


const Logo = () => {
    return (
        <div className='pa7'>
            <Tilt className="Tilt br2 shadow-2 ma4" options={{ max: 55 }} style={{ height: 100, width: 150 }} >
                <div className="Tilt-inner"> <img src="https://i.redd.it/73j1cgr028u21.jpg "alt="An Ahego face"></img> </div>
            </Tilt>

        </div>
    )


}
export default Logo; 