import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterTask } from "../Actions/taskActions";
const TasksFilter = ({task}) => {
  const [radioValue, setRadioValue] = useState(1);
  const dispatch = useDispatch();
  const radios = [
    { name: "All", value: "1" },
    { name: "Done", value: "2" },
    { name: "Not done", value: "3" },
  ];
  return (
    <div>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            //onClick={}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default TasksFilter;
