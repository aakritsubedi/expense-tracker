import React from "react";
import { FaTasks, FaWindowRestore } from "react-icons/fa";

import "assets/css/Navigation.css";
import { Logo } from "assets/image";

function Navigation({ taskMenu, toggleTask }) {
  return (
    <div className="navigation">
      <div className="nav-logo">
        <img src={Logo} alt="Expense Tracker" className="nav-logo-img" />
        <h1 className="nav-title">Expense Tracker</h1>
      </div>
      <div className="task">
        {!taskMenu ? (
          <FaTasks className='task-icon' onClick={toggleTask} title='Show Task Menu' />
        ): 
        (
          <FaWindowRestore className='task-icon' onClick={toggleTask} title='Restore Fullscreen' />
        )}
      </div>
    </div>
  );
}

export default Navigation;
