import React from 'react';
import './LoginRegisterCSS.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
    const [userData,setUserData]=useState({
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:""
    });
    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
        //console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    let navigate = useNavigate();
    function handleRegister(e){

            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/register", userData )
                .then((res)=>{  
                    console.log(res.data);
                     //nakonn sto se registruje da ga posaljemo na stranicu za login
                     navigate("/login");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }

                  });
    }
    return (
        <div className='register'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Register</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="name" required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthdate"required onInput={handleInput}/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" id="emailR"  required onInput={handleInput}/>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone"required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Password" name="password"required onInput={handleInput}/>
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Submit</button>
                                    </div>
                                    <br/><br/>
                                    <p><a href="/login"  className='tekstForme'>I already have an account!</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Register;