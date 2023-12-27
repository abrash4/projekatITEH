import './App.css';
import Footer from './komponente/footer';
import NavBar from './komponente/navbar';
import Pocetna from './komponente/pocetna';
import Login from './komponente/login';
import Register from './komponente/register';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pica from './komponente/pica';
import Korpa from './komponente/korpa';
import Kontakt from './komponente/kontakt';
import Inbox from './komponente/inbox';
import AdminPage from './komponente/adminPage';
import Izmeni from './komponente/izmeni';
import Analiza from './komponente/analiza';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {

  const[token,setToken] = useState();
  const [cartNum, setCartNum] = useState(0);
  const [izmenaID, setIzmenaID] = useState(0);  
  const [pica,setPica] = useState([ ]);
  const [poruke,setPoruke] = useState([]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/pice",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setPica(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [ axiosInstance]);

  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/poruke",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setPoruke(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [ axiosInstance]);

  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 

  function addToken(auth_token){
    setToken(auth_token);
}

function handleLogout(){ 
  window.sessionStorage.setItem('auth_token',null); 
  window.sessionStorage.setItem('auth_name',null); 

  console.log(window.sessionStorage.getItem("auth_token")) 
  window.location.reload();
}

function refreshCart() {
  let u_korpi = pica.filter((p) => p.kolicina > 0);
  setCartProducts(u_korpi);
  var suma=0;
  cartProducts.forEach((p)=>{
    
    suma+=p.cena*p.kolicina;
  })
  console.log(suma);
  setSumPrice(suma);
}
function jeUKorpi(id){
  var postoji=0;
  cartProducts.forEach((p) => {
    if (p.id === id) {

      postoji=1;
    }
  });

  return postoji;
}
function addProduct( id) {
  console.log(id);
  setCartNum(cartNum + 1);

  pica.forEach((p) => {
    if (p.id === id) {
      p.kolicina++;
      console.log(sum);
    }
  });
  refreshCart();

}

function removeProduct( id) {

  if(jeUKorpi(id)===1){

    setCartNum(cartNum - 1);
    pica.forEach((p) => {
      if (p.id === id) {
        if(p.kolicina === 0){
          return;
        }else{
          p.kolicina--; 
        }
      }
    });
    refreshCart();
  }
}

function deletePice(id){

  axios
  .delete("http://127.0.0.1:8000/api/pice/"+id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
  .then((res)=>{  
      console.log(res.data);
      const token = window.sessionStorage.getItem('auth_token');
      window. location. reload();
      window.sessionStorage.set('auth_token',token);

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
function postaviIDZaIzmenu(id){
setIzmenaID(id);
}
  return (
    <div  >
        <BrowserRouter className="App">
        <NavBar token={token} odjava={handleLogout}></NavBar>
        <Pocetna></Pocetna>
        <Routes>
            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/login" element={ <Login  addToken={addToken} ></Login>}></Route>
            <Route path="/register" element={ <Register ></Register>}></Route>
            <Route path="/pica" element={ <Pica pica={pica} onAdd={addProduct} onRemove={removeProduct} ></Pica>}></Route><Route path="/korpa" element={ <Korpa pica={cartProducts} onAdd={addProduct} onRemove={removeProduct} sum={sum} ></Korpa>}></Route> <Route path="/korpa" element={ <Korpa pica={cartProducts} onAdd={addProduct} onRemove={removeProduct} ></Korpa>}></Route>
            <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>
            <Route path="/admin/inbox" element={ <Inbox poruke={poruke} ></Inbox>}></Route>
            <Route path="/admin" element={ <AdminPage pica={pica} deletePice={deletePice} setIzmeniID={postaviIDZaIzmenu} ></AdminPage>}></Route>
            <Route path="/admin/izmeni" element={ <Izmeni id={izmenaID} ></Izmeni>}></Route>
            <Route path="/admin/analiza" element={ <Analiza pica={pica} ></Analiza>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}
export default App;