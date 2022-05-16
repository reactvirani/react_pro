import React from 'react';

function Loading(Component) {
    return function withloadinganycomponent({isloading,data}) {
        console.log(isloading,data);
        if(isloading){
            return(
                <p>Loading...</p>
            )
        }else{
            return (
                <Component data={data} />   
            )
        }
    } 
}

export default Loading;