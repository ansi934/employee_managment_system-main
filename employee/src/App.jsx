// App.jsx (root folder)

import { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import './components/Style.css';  // Importing your CSS from components folder

function App() {
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      {!role && <Login setRole={setRole} setUser={setUser} />}
      {role === 'admin' && <AdminDashboard setRole={setRole} user={user} />}
      {role === 'employee' && <EmployeeDashboard setRole={setRole} user={user} />}
    </>
  );
}

export default App;

