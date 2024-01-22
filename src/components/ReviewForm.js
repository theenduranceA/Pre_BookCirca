// src/components/ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleSubmit = () => {
    // Implement review submission logic
  };

  return (
    <div>
      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default ReviewForm;
