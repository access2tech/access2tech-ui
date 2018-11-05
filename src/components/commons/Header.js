import React from 'react';
import { Link } from 'react-router-dom'
// <div className="navbar navbar-expand-lg navbar-light bg-light">
// // Make link tag from react-router-dom
//   <a className="navbar-brand" href="/">Access2Tech</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//       <a class="nav-item nav-link" href="#">Features</a>
//       <a class="nav-item nav-link" href="#">Pricing</a>
//       <a class="nav-item nav-link disabled" href="#">Disabled</a>
//     </div>
// </div>
const Header = () => (
<div className="container-fluid header">
  <nav className="navbar navbar-light navbar-expand-sm bg-light">
    <Link className="navbar-brand" to="/">Access2Tech</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/contact/">Contact</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about/">About</a>
        </li>
      </ul>
    </div>
  </nav>
</div>)

export default Header;
