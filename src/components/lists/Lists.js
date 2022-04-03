import React from "react";
import SingleList from "./list-card/SingleList";
const Lists = () => {
  return (
    <div className="tab-content" id="ex1-content">
      <div
        className="tab-pane fade show active"
        id="ex1-tabs-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        <ul className="list-group mb-0">
          <SingleList />
        </ul>
      </div>
    </div>
  );
};

export default Lists;
