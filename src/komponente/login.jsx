import axios from 'axios';
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';



function Login({addToken}) {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value; //newUserData['email']=e.target.value;
        console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    let navigate = useNavigate();
    function handleLogin(e){
                //ovo smo dodali tek nakon axios.post() i nakon e.preventDef. treba da sredimo onaj eror 419 u verifyCRFToken-u (vidi poslednje vezbe)
                e.preventDefault(); // da zaustavi refresovanje na stranici da bi mogla da se izvrsi metoda handleLogin jer metoda onSubmit u formi vec ima neko svoje predefinisano ponasanje

                //za komunikaciju izmedju laravela i reacta cemo koristiti axios
                //moramo da pokrenemo npm install axios i da ga importujemo
                //"http://127.0.0.1:8000/api/login" je ruta na kojoj se ovo nalazi u laravelu
                axios
                    .post("http://127.0.0.1:8000/api/login", userData )
                    .then((res)=>{ //ako se uspesno izvrsi logovanje uci ce u funkciju (zbog ovog then)
                        console.log(res.data[0]);
                        if(res.data.success===true){
                           // alert("USPESNO");  


                            //token koji smo dobili od korisnika treba da sacuvamo u storag-u da bismo znali cemu taj korisnik ima pristup
                            window.sessionStorage.setItem("auth_token",res.data[0].token);
                            window.sessionStorage.setItem("auth_name",res.data[0].username);
                            window.sessionStorage.setItem("auth_id",res.data[0].id);
                            addToken(res.data[0].token);
                            console.log(res.data[0].token);
                            if(res.data[0].role === 'admin')
                            {
                                 navigate("/admin")
                            }
                            else{
                                navigate("/pica"); //ovde cemo upisati na koju stranicu treba da ode ulogovani korisnik
                            }



                        }else{
                            alert("NEUSPESNO");
                        }
                    });

    }
    return (
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">

                            <h2 >Log in</h2>
                            <form onSubmit={handleLogin} >                          

                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="email" 
                                        placeholder="Email" 
                                        name="email"
                                        onInput={handleInput}
                                    />
                                </div>

                                <div className="input-group">
                                    <input className="input--style-3" type="password" placeholder="Password" name="password"  onInput={handleInput}/>
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br/><br/>
                                <p><a href="/register"  className='tekstForme'>I am new here!</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
    )
};

export default Login;