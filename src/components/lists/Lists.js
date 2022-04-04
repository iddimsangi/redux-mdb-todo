import React from "react";
import SingleList from "./list-card/SingleList";
// import { useSelector } from "react-redux";
const Lists = ({ tasks }) => {
  const renderLists = tasks.map((task) => (
    <div className="tab-content" id="ex1-content" key={task.id}>
      <div
        className="tab-pane fade show active"
        id="ex1-tabs-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        <ul className="list-group mb-0">
          <SingleList task={task} />
        </ul>
      </div>
    </div>
  ));
  return <div>{renderLists}</div>;
};

export default Lists;
