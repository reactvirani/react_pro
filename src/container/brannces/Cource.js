import React from 'react';

function Cource({changecource}) {
    let Cource = '';
    if(changecource === 'RW1'){
        Cource = 'android';
    }
    else if(changecource === 'RW2'){
        Cource = 'Nodejs';
    }
    else if(changecource === 'RW3'){
        Cource = 'Reactjs';
    }
    else if(changecource === 'RW4'){
        Cource = 'android';
    }
    else if(changecource === 'RW5'){
        Cource = 'Web Devloping';
    }
    return (
        <div>
           <p>cource: {Cource}</p> 
        </div>
    );
}

export default Cource;