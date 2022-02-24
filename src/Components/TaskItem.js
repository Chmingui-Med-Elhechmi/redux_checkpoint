import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../Actions/taskActions";
function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(task.title);
  return (
    <div>
      <div className="task">
        <div>
          <input type='checkbox' />
          {/* #{task.id.length > 1 ? task.id[2] : task.id} */}
        </div>
        <div>
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          ) : (
            <h4>{task.title}</h4>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTask({
                ...task,
                title: title,
              })
            );
            if (editable) {
              setTitle(task.title);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))}>Delelte</button>
      </div>
    </div>
  );
}

export default TaskItem;
