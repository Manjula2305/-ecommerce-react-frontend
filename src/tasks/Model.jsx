

const Modal = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't show the modal if not open

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

