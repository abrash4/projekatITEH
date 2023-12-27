import React, { useEffect } from 'react'; 
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


function Izmeni({id}) {

    const [productData,setProductData]=useState({
        naziv:"",
        proizvodjac:'',
        cena:10000,
        kolicina:0, 
        image:'', 
        vrsta:4,
        id:id 

    });
    useEffect(() => {
        const getRandomLists2 = async () => {
          try {
            const res = await axiosInstance.get( "http://127.0.0.1:8000/api/pice/"+id,
              {
                headers: {
                  token:
                    "Bearer " +
                    ( window.sessionStorage.getItem("auth_token")),
                },
              }
            );
            console.log(res.data.data);
            setProductData(res.data.data);
          } catch (error) {
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
          }
        };
        getRandomLists2();
      }, [ axiosInstance]);

    function handleInput(e){  
        let newProductData = productData;  

        newProductData[e.target.name]=e.target.value;

        setProductData(newProductData);

    }
    let navigate = useNavigate();


    function azuriraj(e){
        e.preventDefault();   
        axios
            .put("http://127.0.0.1:8000/api/pice/"+id, productData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
            .then((res)=>{  
                console.log(res.data);
                 alert("USPESNO")
                 navigate("/admin");
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
    <div id='kontakt' >
    <div id='container1'>
        <div id='contact-box'>
            <div id="left">

            </div>
            <div id="right">
                    <h2 >Izmeni</h2>
                    <form onSubmit={azuriraj} >                          

                        <div className="input-group">
                            <input 
                                className="input--style-3" 
                                type="text" 
                                placeholder="Naziv" 
                                name="naziv"
                                onInput={handleInput} defaultValue={productData.naziv}
                            />
                        </div>

                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="Proizvodjac" name="proizvodjac"  onInput={handleInput} defaultValue={productData.proizvodjac}/>
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="Cena" name="cena"  onInput={handleInput}  defaultValue={productData.cena}/>
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="Slika (URL)" name="image"  onInput={handleInput}  defaultValue={productData.image}/>
                        </div>

                        <div>


                     <select  className="input--style-3" name="vrsta" id="vrsta" defaultValue={productData.vrsta.id} onInput={handleInput}>

                                     <option  className="input--style-3" value="1" id={1} >Rakija</option>
                                     <option className="input--style-3" value="2" id={2} > Rum </option> 
                                     <option className="input--style-3" value="3" id={3} >Tekila </option> 

                                     <option className="input--style-3" value="4" id={4} > Vermunt </option> 

                                     <option className="input--style-3" value="5" id={5} >Votka</option> 

                     </select>
                 </div>
                 <div className="p-t-10">
                            <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                        </div>


                </form>
            </div>
        </div>
    </div>
</div>

  )
}

export default Izmeni