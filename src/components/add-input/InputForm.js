import React from "react";

const InputForm = () => {
  return (
    <form className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input type="text" id="form2" className="form-control" />
      </div>
      <button type="submit" className="btn btn-info ms-2">
        Add
      </button>
    </form>
  );
};

export default InputForm;
