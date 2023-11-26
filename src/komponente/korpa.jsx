import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import {BsPlusLg, BsDashLg} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import "jspdf-autotable";
import jsPDF from "jspdf";
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
function Korpa({pica,onAdd,onRemove,sum }) {
    //javni web servis da dobijemo koeficijent RSD_EUR
  const [RSD_EUR, setRSDEUR] = useState([]);
  useEffect(() => {
      axios({
        method: "GET",
        url:
          "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=EUR",

      })
        .then((response) => {
          console.log(response.data.data['RSD'].value);
          setRSDEUR(response.data.data['RSD'].value);

        })
        .catch((error) => {
          console.log(error);
      });
  }, []);



//javni web servis da dobijemo koeficijent RSD_USD
const [RSD_USD, setRSDUSD] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=USD",

    })
      .then((response) => {
        console.log(response.data.data['RSD'].value);
        setRSDUSD(response.data.data['RSD'].value);

      })
      .catch((error) => {
        console.log(error);
    });
}, []);
    var navigate = useNavigate();
    function sacuvajKorpuUBazi(){
      const user_id=window.sessionStorage.getItem('auth_id');

        //cuvacemo samo stavke korpe, za id korpe cemo uzeti id korisnika (jedna korpa za jednog usera)
        pica.map(p=>{
          console.log(p)
          console.log("http://127.0.0.1:8000/api/stavke/?korpa_id="+user_id+"&pice_id="+p.id+"&kolicina="+p.kolicina+"&user_id="+user_id)

          axios
          .post("http://127.0.0.1:8000/api/stavke/?korpa_id="+user_id+"&pice_id="+p.id+"&kolicina="+p.kolicina+"&user_id="+user_id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
          .then((res)=>{  
              console.log(res.data);
               alert("Uspesno sacuvano")
               navigate("/");
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
        })



    }
    function exportPDF() {

      var valute = document.getElementById('currency');
      var trenutnaValuta  = valute.selectedIndex 
      var koeficijentValute=1;
      var oznakaValute="RSD";
        if(trenutnaValuta===1)//EUR
        {
          koeficijentValute=RSD_EUR;
          oznakaValute="EUR";
        }else{ //USD
          koeficijentValute=RSD_USD;
          oznakaValute="USD";

        }
        sacuvajKorpuUBazi();
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);
        var today = new Date();
        const footer = " \t\t\t\t\t\t\t\tUKUPNO : "+(sum/koeficijentValute).toFixed(2) + "["+oznakaValute+"]";
        const title = "Racun na dan: "+  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+footer;
        const headers = [["MODEL", "CENA["+oznakaValute+"]","KOLICINA","UKUPNO["+oznakaValute+"]"]];

        const data = pica.map(elt=> [elt.naziv, (elt.cena/koeficijentValute).toFixed(2), elt.kolicina, (elt.cena*elt.kolicina/koeficijentValute).toFixed(2)]);

        let content = {
          startY: 50,
          head: headers,
          body: data ,

        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("racun.pdf")
      }

  return (
    <div> 
        <div className='korpa'>
          
            <br /><br /><br />

            <table>
                <thead>
                <tr><th>ID</th><th>NAZIV</th><th>CENA</th><th>KOLICINA</th><th>DODAJ</th><th>IZBACI</th></tr>
                </thead>
                <tbody>
                {pica.map((p)=>(<tr><td>{p.id}</td><td>{p.naziv}</td><td>{p.cena}</td><td>{p.kolicina}</td><td><button className="btn" onClick={() => onAdd(p.id)}><BsPlusLg/></button></td><td><button className="btn" onClick={() => onRemove(p.id)}><BsDashLg/></button></td></tr>))}
                </tbody>
            </table>

            <div className="cenaDiv"><h3>Ukupna cena proizvoda: {sum} RSD</h3></div>
            <br /><br /><br />
            <label htmlFor="currency">U kojoj valuti zelite racun</label>

            <select name="currency" id="currency"  >
                <option value="RSD" >RSD</option>
                <option value="EUR" >EUR</option>
                <option value="USD" >USD</option>

            </select>
            <div>
                <button className="btn btn--pill btn--green" onClick={() => exportPDF()}>Generisi racun</button>
            </div>  


        </div>
    </div>
  )
}

export default Korpa;