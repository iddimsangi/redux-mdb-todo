import React, { useState, useEffect } from "react";
import InputForm from "./add-input/InputForm";
import Lists from "./lists/Lists";
import { useSelector, useDispatch } from "react-redux";
import { activeFilters, completeFilters, allFilters } from "../redux/actions";

const AddTodo = () => {
  const tasks = useSelector((state) => state.allTasks.tasks);
  const tasksFiltered = useSelector((state) => state.filters.payload);
  const [tasksTodos, setTasksTodos] = useState([]);
  const [filterKeyWord, setFilterKeyWord] = useState("All");
  const dispatch = useDispatch();
  const activeHandler = () => {
    setFilterKeyWord("Active");
    const activeTasks = tasks.filter((task) => task.isActive === true);
    dispatch(activeFilters(activeTasks));
  };

  const completeHandler = () => {
    setFilterKeyWord("Complete");
    const activeTasks = tasks.filter((task) => task.isActive === false);
    dispatch(completeFilters(activeTasks));
  };

  const allTasksHandler = () => {
    setFilterKeyWord("All");
    dispatch(allFilters(tasks));
  };
  useEffect(() => {
    filterTasksHandler(filterKeyWord);
  }, [tasks, tasksTodos, filterKeyWord, tasksFiltered]);
  const filterTasksHandler = (keywords) => {
    if (keywords === "All") {
      setTasksTodos(tasks);
    } else if (keywords === "Active") {
      setTasksTodos(tasksFiltered);
    } else if (keywords === "Complete") {
      setTasksTodos(tasksFiltered);
    }
  };
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
                      onClick={allTasksHandler}
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
                      onClick={activeHandler}
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
                      onClick={completeHandler}
                    >
                      Completed
                    </a>
                  </li>
                </ul>
                <Lists myTasks={tasksTodos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
