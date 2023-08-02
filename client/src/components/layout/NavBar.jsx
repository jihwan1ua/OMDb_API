// this is where Web Title, user avatar icon, and IBDM logo, will be residing.
import React, { useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = (prop) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    
  }

  let navigate = useNavigate();
  const navigateUser = () => {
    let newPath = '/user';
    navigate(newPath);
  }

  const navigateMyList = () => {
    let newPath = '/user/mylist';
    navigate(newPath);
  }

  return (
    // default bootstrap navbar example, https://getbootstrap.com/docs/4.3/components/navbar/
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand text-white text-lg brand-text" href="/">
                    OMDb Web App
                </a>
            </div>
            <ul className="navbar-nav ml-auto text-light d-inline-block">
                <li className="nav-item d-inline-block mr-4">
                    <i className="fas fa-list fa-3x" id="user-list-logo" onClick={navigateMyList} />&emsp;
                </li>
                <li className="nav-item d-inline-block mr-4">
                    <i className="fas fa-user-circle fa-3x" id="user-avatar-logo" onClick={navigateUser} />
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar