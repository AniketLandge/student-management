import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndpoint = apiUrl + "/students";

function studentUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getStudents() {
  return http.get(apiEndpoint);
}

export function getStudent(studentId) {
  return http.get(studentUrl(studentId));
}

export function createStudent(student) {
  return http.post(apiEndpoint, student);
}

export function updateStudent(studentId, student) {
  return http.put(studentUrl(studentId), student);
}

export function removeStudent(studentId) {
  return http.delete(studentUrl(studentId));
}
