import React, { useState } from 'react';
import Cource from './Cource';

function Brances(props) {
    const[brance,setbrance]=useState('RW1');

    const branchrw1 = () => {
        setbrance('RW1');
    }
    const branchrw2 = () => {
        setbrance('RW2');
    }
    const branchrw3 = () => {
        setbrance('RW3');
    }
    const branchrw4 = () => {
        setbrance('RW4');
    }
    const branchrw5 = () => {
        setbrance('RW5');
    }

    return (
        <div>
            
            <p>[Brances:]{brance}</p>
            <button onClick={() => branchrw1()}>RW1</button>
            <button onClick={() => branchrw2()}>RW2</button>
            <button onClick={() => branchrw3()}>RW3</button>
            <button onClick={() => branchrw4()}>RW4</button>
            <button onClick={() => branchrw5()}>RW5</button>

            <Cource changecource = {brance} />
        </div>
    );
}

export default Brances;