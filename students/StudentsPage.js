import React, { useEffect, useState } from "react";
import "./StudentsPage.css";

const API =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/students";

function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // FETCH
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await fetch(API);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      alert("Failed to fetch students");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ADD
  const addStudent = async () => {
    if (!studentId || !name) return alert("Enter ID and Name");

    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId, name }),
      });
      fetchStudents();
      setStudentId("");
      setName("");
    } catch (err) {
      alert("Failed to add student");
    }
  };

  // DELETE
  const deleteStudent = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      fetchStudents();
    } catch (err) {
      alert("Delete failed");
    }
  };

  // START EDIT
  const startEdit = (student) => {
    setEditId(student.student_id);
    setName(student.name);
  };

  // UPDATE
  const updateStudent = async () => {
    try {
      await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      fetchStudents();
      setEditId(null);
      setName("");
      setStudentId("");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="students-page">
      <h1 className="students-title">Students Page</h1>

      {/* FORM */}
      <div className="student-form">
        <input
          type="number"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          disabled={editId !== null}
        />

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {editId ? (
          <button onClick={updateStudent}>Update</button>
        ) : (
          <button onClick={addStudent}>Add</button>
        )}
      </div>

      {/* TABLE */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="3">No Students Found</td>
              </tr>
            ) : (
              students.map((s) => (
                <tr key={s.student_id}>
                  <td>{s.student_id}</td>
                  <td>{s.name}</td>
                  <td>
                    <button
                      className="action-btn edit-btn"
                      onClick={() => startEdit(s)}
                    >
                      Edit
                    </button>

                    <button
                      className="action-btn delete-btn"
                      onClick={() => deleteStudent(s.student_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentsPage;
