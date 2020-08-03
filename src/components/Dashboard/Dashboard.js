import React, { useEffect, useState } from "react";

import Navigation from "components/Navigation";
import Task from "components/Task";

import * as route from "constants/routes";

import "assets/css/Dashboard.css";

function Dashboard(props) {
  const [user, setUser] = useState({});
  const [taskMenu, setTaskMenu] = useState(false);

  useEffect(() => {
    //if user is available the set user else logout
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      props.history.push(route.LOGIN);
    }
  }, [props]);

  let toggleTask = () => {
    setTaskMenu(!taskMenu);
  };

  return (
    <div className="dashbaord-main">
      <div className={taskMenu ? 'main-container' : 'main-container-with-task'}>
        <Navigation toggleTask={toggleTask} taskMenu={taskMenu} />
        <b>Your Email: </b>{user.email}
      </div>
      <div className={taskMenu ? 'task-container' : 'no-task'}>
        {taskMenu && <Task />}
        </div>
    </div>
  );
}

export default Dashboard;
