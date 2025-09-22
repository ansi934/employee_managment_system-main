/*// components/AdminDashboard.jsx

import Profile from './Profile';
import Feedback from './Feedback';
import EmployeeManager from './EmployeeManager';

function AdminDashboard({ setRole, user }) {
  return (
    <div className="container">
      <div className="card">
        <h1>Admin Dashboard</h1>
        <p>Welcome {user ? user.username : 'Admin'}</p>
        <button onClick={() => setRole(null)}>Logout</button>
      </div>

      <Profile role="admin" />

      <EmployeeManager />

      <div className="card">
        <h2>Employee Feedback</h2>
        <Feedback viewOnly />
      </div>
    </div>
  );
}

export default AdminDashboard;
*/

import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";

function AdminDashboard() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: "", email: "", password: "", role: "" });
  const [editEmployee, setEditEmployee] = useState(null);

  // Fetch all employees
  const fetchEmployees = async () => {
    const res = await axios.get(`${API_BASE}/api/employees`);
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add employee
  const addEmployee = async () => {
    await axios.post(`${API_BASE}/api/employees`, newEmployee);
    setNewEmployee({ name: "", email: "", password: "", role: "" });
    fetchEmployees();
  };

  // Update employee
  const updateEmployee = async () => {
    await axios.put(`${API_BASE}/api/employees/${editEmployee.id}`, editEmployee);
    setEditEmployee(null);
    fetchEmployees();
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    await axios.delete(`${API_BASE}/api/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Add Employee */}
      <h3>Add Employee</h3>
      <input
        placeholder="Name"
        value={newEmployee.name}
        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newEmployee.email}
        onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={newEmployee.password}
        onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
      />
      <input
        placeholder="Role"
        value={newEmployee.role}
        onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
      />
      <button onClick={addEmployee}>Add</button>

      {/* Employees List */}
      <h3>Employees</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {editEmployee && editEmployee.id === emp.id ? (
              <>
                <input
                  value={editEmployee.name}
                  onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
                />
                <input
                  value={editEmployee.role}
                  onChange={(e) => setEditEmployee({ ...editEmployee, role: e.target.value })}
                />
                <button onClick={updateEmployee}>Save</button>
                <button onClick={() => setEditEmployee(null)}>Cancel</button>
              </>
            ) : (
              <>
                {emp.name} ({emp.role})
                <button onClick={() => setEditEmployee(emp)}>Edit</button>
                <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
