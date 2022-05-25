import React from 'react';
import { useState } from 'react';

function Form(props) {
    let [usertype, setUsertype] = useState('login');

    return (

        <div className="container">
            <div className="container">
                <div className="section-title">
                    {
                        usertype === 'login' ?
                            <h2>login</h2>
                            : <h2>signup</h2>
                    }

                </div>
            </div>
            <form className="php-email-form">

                <div>
                    {
                        usertype === 'signup' ? <div className="row mt-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="name" className="form-control" name="name" id="name" placeholder="Your Name" required />
                        </div>
                    </div> : null
                    }
                    
                    <div className="row mt-3">
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6 form-group">
                            <input type="password" name="password" className="form-control" id="password" placeholder="Your password" required />
                        </div>
                    </div>
                </div>
                {
                    usertype === 'login' ? 
                    <div className='m-5 text-center'>
                    <div className="d-none d-md-inline appointment-btn scrollto">Log In</div>
                </div> :
                <div className='m-5 text-center'>
                    <div className="d-none d-md-inline appointment-btn scrollto">Sign Up</div>
                </div>
                }
                {
                    usertype === 'login' ? 
                    <div><span>create an account ? </span><button className='d-none d-md-inline appointment-btn scrollto border-0' onClick={() => setUsertype('signup')}>Sign Up</button></div>
                 :   <div><span>Already Have an Account ? </span><button className='d-none d-md-inline appointment-btn scrollto border-0' onClick={() => setUsertype('login')}>Log In</button></div>
                }
            </form>

        </div>
    );
}

export default Form;