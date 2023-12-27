import { BiDrink } from 'react-icons/bi';
import { Link } from 'react-router-dom'

function NavBar({token,odjava}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">   <BiDrink></BiDrink></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Pocetna  </Link>
            </li>
            {token == null ? 
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Uloguj se  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Registruj se  </Link>
                </li>
                </>
                :
                <>

                    {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                            <>
                     <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin  </Link>
                    

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/inbox">Inbox  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/analiza">Analiza  </Link>
                    </li>
                    </>
                    :
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pica">Ponuda  </Link>
                    

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/korpa">Korpa  </Link>
                    </li>
                    </>
                }

                <li className="nav-item active">
                    <Link className="nav-link" to="/"  onClick={odjava}>Odjavi se  </Link>
                </li>
                </>
                
            }   
                <li className="nav-item active">
                    <Link className="nav-link" to="/kontakt"  >Kontakt  </Link>
                </li>

            </ul>
        </div>
    </nav>
  );
}

export default NavBar;