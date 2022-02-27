import React from 'react'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg px-5`} style = {{backgroundColor: `${props.mode}`}}>
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch"  />
            <label className="form-check-label" >Enable DarkMode</label>
          </div>
          <div className="form-check form-switch">
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" />
            <label className="form-check-label" >Green DarkMode</label>
          </div>
          <div className="form-check form-switch">
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch"/>
            <label className="form-check-label" >Blue DarkMode</label>
          </div>
        </div>
      </nav>
    </> 
  )
}

export default Navbar