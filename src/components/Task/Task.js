import React from "react";

import "assets/css/Task.css";

function Task() {
  return (
    <div className="task-wrapper">
      <div className="task-header">
        <span className="task-title">To-Do</span>
      </div>
      <div className="task-body">
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
      </div>
    </div>
  );
}

export default Task;
