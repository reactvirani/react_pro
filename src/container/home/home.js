import React from 'react';

function home({data}) {
    return (
    <>
        <table border='1'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
            </tr>
      {data.map((d,i) => {
          return(
                   <tr>
                       <td> <h1>{d.id}</h1></td>
                       <td><h3>{d.name}</h3></td>
                   </tr>
          )
        })}
        </table>
       </>
    );
}

export default home;