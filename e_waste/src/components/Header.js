import React from 'react';

function Header({ title, titleIcon }) {
    return (
        <header className="header">
          <div className="menu-icon">
            <i className="fas fa-bars"></i>
          </div>
          <div className="title-container">
            <i className={`title-icon ${titleIcon}`}></i> {/* Custom icon passed as prop */}
            <h1>{title}</h1>
          </div>
          <div className="header-icons">
            <i className="fas fa-bell notification-icon"></i>
            <i className="fas fa-user account-icon"></i>
          </div>
        </header>
    );
}
    
export default Header;