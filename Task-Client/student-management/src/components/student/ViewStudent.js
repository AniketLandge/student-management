import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { useParams } from "react-router-dom";
import { getStudents } from "../serivces/studentService";

const ViewStudent = () => {
  const [studentMarks, setStudentMarks] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await getStudents(`${id}`);
    let student = result.data[0];

    setStudentMarks(student);
  };

  const data = [
    { name: "Maths", value: studentMarks.StudMathMark },
    { name: "Science", value: studentMarks.StudScienceMark },
    { name: "English", value: studentMarks.StudEnglishMark },
  ];

  return (
    <>
      <div class="container mt-5">
        <h1>Pie Chart</h1>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="60%"
            cy="30%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </div>
    </>
  );
};

export default ViewStudent;
