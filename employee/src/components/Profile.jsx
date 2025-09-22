function Profile({ role }) {
  return (
    <div className="card">
      <h3>{role === 'admin' ? 'Admin Profile' : 'Employee Profile'}</h3>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> johndoe@example.com</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}
export default Profile;
