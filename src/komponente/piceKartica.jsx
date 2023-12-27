import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"

function PiceKartica({product,onAdd,onRemove}) {
  return (
    <div className="card">

    <div className="card-header" >
         <img className='card-img-top'  src ={product.image}   /> 
    </div>
    <div className="card-body">


        <h4 className = "naslovKartice">  {product.naziv}   </h4>
        <hr />
        <h6 className="opisProizvoda"> 

        <br /><br />  <b> Proizvodjac:</b>   {product.proizvodjac} 
        <br /><br />  <b>  Vrsta: </b> {product.vrsta.naziv}

        <br /><br /> <b>  Cena:</b> {product.cena} RSD 
         </h6>

         <button
                  className="btn"
                  onClick={() => onAdd( product.id)}
                >
                <BsPlusLg />
              </button>
              <button 
                className="btn"
                onClick={() => onRemove( product.id)}>
                <BsDashLg />
            </button>

    </div> 
</div>
  )
}

export default PiceKartica