import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  


  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about} </Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-2 ">
              <input className="form-check-input" onClick={props.gmode} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className={`form-check-label text-${props.mode=="success"?"dark":"success"}`} htmlFor="switchCheckDefault">{props.sg}</label>
            </div>
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-${props.mode=="success"?"dark":"success"}`} type="submit">Search</button>
            </form>
            <div className="form-check form-switch mx-2 ">
              <input className="form-check-input" onClick={props.moding} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className={`form-check-label text-${props.scolor}`} htmlFor="switchCheckDefault">{props.setbtn}</label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}

Navbar.defaultProps ={
  title:'set title',
  about:'set about'
};

export default Navbar
