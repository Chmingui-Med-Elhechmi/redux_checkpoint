import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Actions/taskActions";
import { v1 as uuid } from "uuid";

function TaskInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() =>
            {
              dispatch(
                addTask({
                  id: uuid,
                  title: title,
                })
              );
              setTitle('');
            }
          }
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
