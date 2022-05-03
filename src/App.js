import './App.css';






function App() {

// let data = [
//   {
//     id: 101,
//     name: 'Abacavir',
//     quantity: 25,
//     price: 150,
//     expiry: 2022,
//     status: true
//   },
//   {
//     id: 102,
//     name: 'Eltrombopag',
//     quantity: 90,
//     price: 550,
//     expiry: 2021,
//     status: true
//   },
//   {
//     id: 103,
//     name: 'Meloxicam',
//     quantity: 85,
//     price: 450,
//     expiry: 2025,
//     status: false
//   },
//   {
//     id: 104,
//     name: 'Allopurinol',
//     quantity: 50,
//     price: 600,
//     expiry: 2023,
//     status: true
//   },
//   {
//     id: 105,
//     name: 'Phenytoin',
//     quantity: 63,
//     price: 250,
//     expiry: 2021,
//     status: false
//   }
// ];

// console.log(data);
// data.map((value, index) => console.log(value.id, value.name));
// let filterdata = data.filter((d, i) => d.expiry >= 2022);
// console.log(filterdata);
// let reducedata = filterdata.reduce((acc, d, i) => acc + d.price ,0);
// console.log(reducedata);

// let filterdata = data.filter((d, i) => d.expiry >= 2022);
// let total = filterdata.reduce((acc, d, i) => acc + d.price ,0);
  


return (
    <>
  {/* <table border="1" >

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
    </table> */}
    </>
  );
}
export default App;


