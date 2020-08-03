import React, { useEffect, useState } from "react";
import firebase from "firebase";

import { FaTrash } from "react-icons/fa";

import { db } from "firebaseConfig";

import AddTask from "components/TasksModule/AddTask";

import "assets/css/Task.css";

function Task({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() }))
        );
      });
  }, []);

  let addTask = (e, task) => {
    e.preventDefault();
    db.collection("todos").add({
      username: user.email,
      task: task,
      isComplete: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  let deleteTask = (e, id) => {
    e.preventDefault();
    db.collection('todos').doc(id).delete();
  };
  let completeTask = (e, id, todo) => {
    console.log(todo);
    e.preventDefault();
    db.collection('todos').doc(id).update({
      isComplete: !todo.isComplete
    })
  };
  let timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    return time;
  }

  return (
    <div className="task-wrapper">
      <div className="task-header">
        <span className="task-title">To-Do</span>
        <span className='task-username'>{user.email}</span>
      </div>
      <div className="task-body">
        <AddTask addTask={addTask} />
        <ul className="task-lists">
          {todos.map(({ id, todo }) => (
            todo.username === user.email &&  (
              <li key={id}>
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={(e) => completeTask(e, id, todo)}
                />
                {todo.task}
                <div className="task-info">
                  <span>{todo.timestamp && timeConverter(todo.timestamp.seconds)}</span>
                  <FaTrash onClick={(e) => deleteTask(e, id)} className="task-delete-btn" />
                </div>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
