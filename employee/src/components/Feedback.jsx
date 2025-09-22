import { useState } from 'react';

function Feedback({ viewOnly }) {
  const [feedbacks, setFeedbacks] = useState([
    "Great environment!",
    "More team-building activities."
  ]);
  const [input, setInput] = useState('');

  const submitFeedback = () => {
    if (input.trim()) {
      setFeedbacks([...feedbacks, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      {viewOnly ? (
        <ul>
          {feedbacks.map((f, idx) => <li key={idx}>{f}</li>)}
        </ul>
      ) : (
        <>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Write your feedback here..."
          />
          <br />
          <button onClick={submitFeedback}>Submit Feedback</button>
        </>
      )}
    </div>
  );
}
export default Feedback;
