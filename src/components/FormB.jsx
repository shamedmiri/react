import { useState } from 'react';

export default function FormB({ taskId, onComplete }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onComplete(taskId, {
      comment: { value: comment, type: 'String' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>فرم B</h2>
      <label>
        نظر:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">ارسال</button>
    </form>
  );
}
