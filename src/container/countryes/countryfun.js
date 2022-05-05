import React, { useState } from 'react';

function Countryfun(props) {

    const[country, setcountry] =  useState('india')
    const[gdp, setgdp] = useState('0')

    const changecountry = () => {
        setcountry('uk')
    }

    return (
        <div>
            
            <p>[function base Component :] {country}</p>
            <button onClick={() => changecountry() }>change</button>

        </div>
    );
}

export default Countryfun;