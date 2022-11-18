import React from 'react';

export default function LoadingSpinner() {

  return (
    <div className="text-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

