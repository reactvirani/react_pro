import React, { useState } from 'react';
import Cityfunpro from './cityfunpro';

function Countryfunpro({gdpval}) {

    const[country, setcountry]= useState('india');
    const[gdp,setgdp]=useState(0);

    const changecountry = () => {
        setcountry('canada')
    }

    return (
        <div>
            
            <p>country[funnction based component:] {country}</p>
            <button onClick={() => changecountry()}>change</button>

            <p>GDP: {gdp}</p>
            <button onClick={() => setgdp(gdpval)}>CHANGE</button>

            <Cityfunpro fampla={country} />

        </div>

    );
}

export default Countryfunpro;