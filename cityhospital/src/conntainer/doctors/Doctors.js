import React from 'react';
import CardUI from '../../component/CardUI/CardUI';

function Doctors(props) {

    let doctors = [{
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
      }];

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <CardUI data={doctors} />
            </div>
        </section>

    );
}

export default Doctors;