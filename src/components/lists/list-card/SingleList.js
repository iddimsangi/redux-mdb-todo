import React from "react";
// import { useSelector } from "react-redux";
const SingleList = ({ task }) => {
  //   const task = useSelector((state) => state.allTasks.tasks);
  //   const { id, isActive, inputValue } = task[0];
  //   console.log(inputValue);
  const { id, isActive, inputValue } = task;

  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: "#f4f6f7" }}
      key={id}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        aria-label="..."
      />
      {inputValue}
    </li>
  );
};

export default SingleList;
