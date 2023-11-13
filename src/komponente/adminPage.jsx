import React from 'react'
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function AdminPage({pica,deletePice,setIzmeniID}) {
    let navigate = useNavigate();
    function editPice(id){
        setIzmeniID(id);

         navigate("/admin/izmeni/");
    }
  return (
    <div>
    <h1>Dobrodosli na admin stranicu</h1>
    <div className='korpa'>

            <table>
                <thead>
                    <tr><th>ID</th><th>NAZIV</th><th>PROIZVODJAC</th><th>CENA</th><th>OBRISI</th><th>IZMENI</th></tr>
                </thead>
                <tbody>
                        {pica.map((p)=>(<tr key={p.id}><td>{p.id}</td><td>{p.naziv}</td><td>{p.proizvodjac}</td><td>{p.cena}</td><td><button className="btn" onClick={() => deletePice(p.id)}><BsFillTrashFill></BsFillTrashFill></button></td><td><button className="btn" onClick={() => editPice(p.id)}><BsPencilFill></BsPencilFill></button></td></tr>))}
                </tbody>
            </table>
    </div>
    </div>



  )
}

export default AdminPage;