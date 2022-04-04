import React, { useState, useEffect } from "react";
import InputForm from "./add-input/InputForm";
import Lists from "./lists/Lists";
import { useSelector } from "react-redux";

const AppBase = () => {
  const tasks = useSelector((state) => state.allTasks.tasks);
  const [filtersTodos, setfiltersTodos] = useState([]);

  useEffect(() => {
    setfiltersTodos(tasks);
    console.log(filtersTodos);
  }, [tasks, filtersTodos]);
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <InputForm />

                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="ex1-tab-1"
                      data-mdb-toggle="tab"
                      href="#ex1-tabs-1"
                      role="tab"
                      aria-controls="ex1-tabs-1"
                      aria-selected="true"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-2"
                      data-mdb-toggle="tab"
                      href="#ex1-tabs-2"
                      role="tab"
                      aria-controls="ex1-tabs-2"
                      aria-selected="false"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="ex1-tab-3"
                      data-mdb-toggle="tab"
                      href="#ex1-tabs-3"
                      role="tab"
                      aria-controls="ex1-tabs-3"
                      aria-selected="false"
                    >
                      Completed
                    </a>
                  </li>
                </ul>
                <Lists tasks={filtersTodos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBase;
