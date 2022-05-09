import React from 'react';


function cityfunpro({fampla}) {

    return (
        <div>
            {
                fampla === 'india' ? <p>famous place: tajmahal</p> : <p>famous place : torato</p>  
            }          
        </div>
    );
}

export default cityfunpro;