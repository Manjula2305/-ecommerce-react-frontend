import React from 'react';

const Loading = ({ isLoading, children }) => {
  return (
    <div>
      {isLoading ? 'Loading...' : children}
    </div>
  );
};

export default Loading;
