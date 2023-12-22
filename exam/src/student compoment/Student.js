import React, { useState } from 'react';

const Student = ({ id, name, image, email }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student">
      <img src={image} alt={name} />
      <h2>Aptech</h2>
      <h3>Unless your potential</h3>
      <p>Email: {email}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="additional-details">
          <p>ID: {id}</p>
        </div>
      )}
    </div>
  );
}

export default Student;
