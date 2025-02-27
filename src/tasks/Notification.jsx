import React from 'react';

const Notification = ({ message }) => {
  return (
    <div>
      {message ? <p>{message}</p> : null}
    </div>
  );
};

export default Notification;
