import React from "react";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../redux/actions";
const SingleList = ({ task }) => {
  const { id, isActive, inputValue } = task;
  const dispatch = useDispatch();
  // const markCompleteHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(markComplete(id));
  // };
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
        onClick={() => dispatch(markComplete(id))}
        // onChange={(e) => markCompleteHandler(e)}
        checked={!isActive}
      />
      {isActive ? inputValue : <s>{inputValue}</s>}
    </li>
  );
};

export default SingleList;
