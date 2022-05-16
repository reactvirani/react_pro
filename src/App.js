import './App.css';


import React, { useEffect, useState } from 'react';
import home from './container/home/home';
import Loading from './container/loading/Loading';

let LoadingWitHome = Loading(home);

function App(props) {
  const [loading,setloading] = useState(false);
  const[data,setdata] = useState([]);

  let orgdata = [
    {id:101,name:'ankitbhai'},
    {id:102,name:'piyusbhai'},
    {id:103,name:'pragatimem'}
  ]

  useEffect(
    () => {
      setloading(true);
      setTimeout(() => {setloading(false); setdata(orgdata)},2000)
    },
    []
  )

  console.log(loading, data);
  return (
    <div>
      <>
        <LoadingWitHome
        isloading={loading}
        data={data}
        />
      </>
    </div>
  );
}

export default App;

// function App() {


// return (
//     <>
  
//       {/* <Cityfun/>
//       {/* <City /> */}
//       {/* <Countryfunpro gdpval={9.5}/>   */}
  
//       {/* <Brances /> */}

//       {/* <Time /> */}
//       {/* <Timefun /> */} 
      
//     </>
//   );
// }
// export default App;


