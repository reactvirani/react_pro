import React, { useState } from 'react';
import './explorer.css';
function Explorer(props) {

    let[counter, setcounter] = useState(0);

    return (
        <div>
         <div className='center'>
            <button onClick={() => setcounter(counter < 10 ? counter + 1 : counter)}>+</button>
            <span className='border'>{counter}</span>
            <button onClick={() => setcounter(counter > 0 ? counter - 1 : counter)}>-</button>

        </div>
        </div>
    );
}

export default Explorer;