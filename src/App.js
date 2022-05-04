import './App.css';






function App() {

let data = [
  {
    id: 101,
    name: 'Abacavir',
    quantity: 25,
    price: 150,
    expiry: 2022,
    status: true
  },
  {
    id: 102,
    name: 'Eltrombopag',
    quantity: 90,
    price: 550,
    expiry: 2021,
    status: true
  },
  {
    id: 103,
    name: 'Meloxicam',
    quantity: 85,
    price: 450,
    expiry: 2025,
    status: false
  },
  {
    id: 104,
    name: 'Allopurinol',
    quantity: 50,
    price: 600,
    expiry: 2023,
    status: true
  },
  {
    id: 105,
    name: 'Phenytoin',
    quantity: 63,
    price: 250,
    expiry: 2021,
    status: false
  }
];

// console.log(data);
// data.map((value, index) => console.log(value.id, value.name));
// let filterdata = data.filter((d, i) => d.expiry >= 2022);
// console.log(filterdata);
// let reducedata = filterdata.reduce((acc, d, i) => acc + d.price ,0);
// console.log(reducedata);

let filterdata = data.filter((d, i) => d.expiry >= 2022);
let total = filterdata.reduce((acc, d, i) => acc + d.price ,0);
  
let employe = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];


  // // employe.map((value, index) => console.log(value.age, value.name));
  // let workigemploye = employe.filter((d,i) => d.status === true);
  // // console.log(workigemploye);
  // let expence = workigemploye.reduce((acc,d,i)=> d.salary+ d.bonus,0);
  // // console.log(expence);


  let workingemploye = employe.filter((d,i) => d.status === true);
  let expence = workingemploye.reduce((acc,d,i)=> acc + d.salary + d.bonus,0);

return (
    <>

  <table border="1" >

    <tr>
      <th>id</th>
      <th>name</th>
      <th>price</th>
      <th>expiry</th>
      <th>total</th>
    </tr>
  { 
  filterdata.map((value, index)=>{
     return(
        <tr>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.price}</td>
          <td>{value.expiry}</td>
          {index === 0? <td rowspan="5">{total}</td> :null}

        </tr>
     )
    })

  }
    </table>

    {
      <table border="1">
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALLARY</th>
            <th>BONUS</th>
            <th>TOTAL</th>
            <th>COMPANY Ex.</th>
          </tr>
          {
              workingemploye.map((value, index) =>{
                let amount = value.salary  + value.bonus ;
                return(
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.salary}</td>
                    <td>{value.bonus}</td>
                    <td>{amount}</td>
                  {index === 0? <td rowSpan={5}><span class="center">{expence}</span></td> :null}
                  </tr>
                )
              })
         }  
      </table>
    }    
    
    
    
    </>
  );
}
export default App;


