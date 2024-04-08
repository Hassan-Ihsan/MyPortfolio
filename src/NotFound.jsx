import React from 'react';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '91vh',background:"#081b29" }}>
      <h1 style={{ fontSize: '3rem' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.5rem', color: 'white' }}>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
