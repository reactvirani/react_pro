import React, { useState } from 'react';
import Cityfun from './cityfun';

function Countryfun(props) {

    // const[country, setcountry] =  useState('india')
    // const[gdp, setgdp] = useState('0')

    // const changecountry = () => {
    //     setcountry('uk')
    // }

    const[country, setcountry] =  useState('india')

    const changecountry = () => {
        setcountry('singapore')
    }
   
    return (
        <div>
            
            {/* <p>[function base Component :] {country}</p>
            <button onClick={() => changecountry() }> change</button> */}

            <p>Country:{country}</p>
            <button onClick={() => changecountry()}>change</button>
        
           

        </div>
    );
}

export default Countryfun;