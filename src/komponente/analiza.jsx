import React from 'react'
import { useNavigate } from 'react-router-dom';
import Grafik from './grafik';

function Analiza({pica}) {

  return (
    <div>
    <h1>Statistike</h1>
    <div className='korpa'>
           <Grafik pica={pica}></Grafik>

    </div>
    </div>



  )
}

export default Analiza;