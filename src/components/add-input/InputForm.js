import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
const InputForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    id: new Date(),
    isActive: true,
    inputValue: "",
  });

  const inputHandler = (e) => {
    return setInputs({
      ...inputs,
      inputValue: e.target.value,
    });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    dispatch(addTask(inputs));
    setInputs({
      ...inputs,
      inputValue: "",
    });
  };
  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={onFormSubmit}
    >
      <div className="form-outline flex-fill">
        <input
          type="text"
          id="form2"
          className="form-control"
          name="inputValue"
          value={inputs.inputValue}
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <button type="submit" className="btn btn-info ms-2">
        Add
      </button>
    </form>
  );
};

export default InputForm;
