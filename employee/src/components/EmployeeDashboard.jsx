// EmployeeDashboard.jsx
function EmployeeDashboard({ setRole, user }) {
  return (
    <div className="container">
      <div className="card">
        <h1>Employee Dashboard</h1>
        <p>Welcome, {user}</p>
        <button onClick={() => setRole(null)}>Logout</button>

        <h2>Payslip</h2>
        <p>Month: April 2025</p>
        <p>Salary: $3000</p>
        <p>Deductions: $200</p>
        <p>Net Pay: $2800</p>
        <button>Download Payslip</button>

        <h2>Attendance</h2>
        <p>Days Present: 20</p>
        <p>Days Absent: 2</p>
        <p>Leave Balance: 5</p>

        <h2>Submit Feedback</h2>
        <textarea rows="3" placeholder="Write your feedback..."></textarea><br />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
