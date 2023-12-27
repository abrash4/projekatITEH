import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Kontakt() {

    const [porukaData,setPorukaData]=useState({
        ime:"",
        email:"",
        poruka:""
    });
    function handleInput(e){  
        let newPorukaData = porukaData; 

        newPorukaData[e.target.name]=e.target.value;

        setPorukaData(newPorukaData);  
        console.log(newPorukaData);
    }
    let navigate = useNavigate();
    function handleSend(e){

        e.preventDefault();  
        axios
            .post('http://127.0.0.1:8000/api/kontakt', porukaData )
            .then((res)=>{ 
                console.log(res);
                if(res.data.success===true){
                    alert("USPESNO");
                   navigate("/");  



                }else{
                    alert("NEUSPESNO");
                }
            }).catch(error => console.error(error.response.data));


    }



    return (
        <div id='kontakt' >
<div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <form onSubmit={handleSend}>
                            <h2>Contact us</h2>
                            <input type="text" className='field' placeholder='Vase ime'  name ='ime' onInput={handleInput}/>
                            <input type="email" className='field' placeholder='Vas e-mail' name = 'email' onInput={handleInput} />
                            <textarea className='field area' placeholder='Poruka' name="poruka" onInput={handleInput}></textarea>
                            <button type="submit" className='btn'>Posalji</button>
                        </form>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Kontakt;