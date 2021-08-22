import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createStudent } from "../serivces/studentService";

const AddStudent = () => {
  let history = useHistory();
  const [student, setStudent] = useState({
    StudName: "",
    StudMathMark: "",
    StudScienceMark: "",
    StudEnglishMark: "",
  });
  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createStudent(student);

    history.push("/");
  };

  const { StudName, StudMathMark, StudScienceMark, StudEnglishMark } = student;
  return (
    <div className="container mt-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Student</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Student Name"
              name="StudName"
              value={StudName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Maths Marks"
              name="StudMathMark"
              value={StudMathMark}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Science Marks"
              name="StudScienceMark"
              value={StudScienceMark}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter English Marks"
              name="StudEnglishMark"
              value={StudEnglishMark}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
