import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStudents, removeStudent } from "./serivces/studentService";

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    const result = await getStudents();
    const studentData = result.data;
    setStudents(studentData);
  };

  const deleteStudent = async (id) => {
    const isDelete = window.confirm("Do you want to delete?");
    if (!isDelete) return;
    await removeStudent(`${id}`);
    fetchStudent();
  };
  return (
    <>
      <div className="container mt-2">
        <Link className="btn btn-primary" to="/student/add">
          Add Student
        </Link>
        <div className="py-4">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Maths</th>
                <th scope="col">Science</th>
                <th scope="col">English</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.StudID}>
                  <th scop="row">{student.StudID}</th>
                  <td>{student.StudName}</td>
                  <td>{student.StudMathMark}</td>
                  <td>{student.StudScienceMark}</td>
                  <td>{student.StudEnglishMark}</td>
                  <td>
                    <Link
                      className="btn btn-primary me-2"
                      to={`/student/view/${student.StudID}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary me-2"
                      to={`/student/edit/${student.StudID}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-outline-danger"
                      onClick={() => deleteStudent(student.StudID)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
