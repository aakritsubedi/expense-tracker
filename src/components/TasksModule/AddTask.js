import React, { useState } from 'react';

import { FaCheck } from 'react-icons/fa';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  let submitTask = (e) => {
    addTask(e, task);
    setTask('');
  }

  return (
    <form className='addtask-form'>
      <textarea  placeholder='Add task title' rows='3' value={task} onChange={e => setTask(e.target.value)} />
      <button type='submit' disabled={!task} onClick={submitTask}><FaCheck /></button>
    </form>
  )
}

export default AddTask
