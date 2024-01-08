import React from 'react';

export const TopHeader = () => {
  return (
    
    <div className="your-component">
      <div className="navbar">
        <div className="logo">
          {/* Your logo image */}
          {/* <img src="path/to/your-logo.png" alt="Logo" /> */}
          <p style={{color:"white"}}>Canteen Management</p>
        </div>
        
        <ul className="menu-list">
          <li className="menu-item"><a href="/">Menu 1</a></li>
          <li className="menu-item"><a href="/">Menu 2</a></li>
          <li className="menu-item"><a href="/">Menu 3</a></li>
        </ul>

        <div className="auth-buttons">
          <button className="btn signup">SIGN UP</button>
          <button className="btn signin">SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

