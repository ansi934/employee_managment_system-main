// components/EmployeeManager.jsx

import { useState } from 'react';

function EmployeeManager() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', role: '' });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.name || !form.role) return alert("Please fill all fields");
    const newEmployee = { ...form, id: Date.now() };
    setEmployees([...employees, newEmployee]);
    setForm({ id: '', name: '', role: '' });
  };

  const handleEdit = (emp) => {
    setForm(emp);
    setEditingId(emp.id);
  };

  const handleUpdate = () => {
    setEmployees(employees.map(emp => emp.id === editingId ? form : emp));
    setForm({ id: '', name: '', role: '' });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?"))
      setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="card">
      <h2>Manage Employees</h2>

      <div>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="role" placeholder="Role" value={form.role} onChange={handleChange} />

        {editingId ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>

      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && <tr><td colSpan="3">No employees</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeManager;
