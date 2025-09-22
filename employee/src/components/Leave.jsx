import { useState } from 'react';

function Leave() {
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card">
      <h2>Apply for Leave</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Reason:
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            From:
            <input type="date" required />
          </label>
          <br />
          <label>
            To:
            <input type="date" required />
          </label>
          <br />
          <button type="submit">Submit Leave Request</button>
        </form>
      ) : (
        <p>Your leave request has been submitted!</p>
      )}
    </div>
  );
}

export default Leave;