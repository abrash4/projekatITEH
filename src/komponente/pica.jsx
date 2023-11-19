import React, { useState } from 'react'
import PiceKartica from './piceKartica'

function Pica({pica,onAdd,onRemove }) {
  const [sort, setSort] = useState(true);
  function sortAsc(){

    setSort(true);
  }
  function sortDesc(){

    setSort(false);
  }
  return (
    <div>
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
        <div className='svaPica'>

            {sort===true?
              <>
                {pica
                     .sort((a, b) => a.cena < b.cena ? -1 : 1)
                     .map((t)=>(<PiceKartica key={t.id} product={t}   onAdd={onAdd} onRemove={onRemove} ></PiceKartica>))}
              </>
              :
              <>
                {pica
                     .sort((a, b) => a.cena > b.cena ? -1 : 1)
                     .map((t)=>(<PiceKartica key={t.id} product={t}    onAdd={onAdd} onRemove={onRemove}></PiceKartica>))}
              </>
            }





        </div>
    </div>
  )
}

export default Pica;