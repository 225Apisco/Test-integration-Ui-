export default function ActionButton({ label, onClick, disabled }) {
  return (
    <button
      className="btn btn-sm btn-outline-primary me-2"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
