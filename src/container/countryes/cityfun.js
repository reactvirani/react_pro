import React, { useState } from 'react';
import city from './city';

function Cityfun(props) {

    const[city, setcity] =  useState('surat')
    const[food, famousfood] = useState('dhokla')

    const changecity = () => {
        setcity('mumbai')
    }

    return (
        <div>
            
            <p>[function base Component :] {city}</p>
            <p>[Famous food for this city]{food}</p>
            <button onClick={() => {
                changecity();
                famousfood('vadapav');
             }}>change</button>
        </div>
    );
}

export default Cityfun;