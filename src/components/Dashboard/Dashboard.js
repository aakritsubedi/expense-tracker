import React, { useEffect, useState } from 'react'

function Dashboard(props) {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    //if user is available the set user else logout
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      setUser(user)
    } 
    else {
      props.history.push("/login");
    }
  }, [props]);

  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Dashboard;
