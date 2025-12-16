import React, { useState } from 'react';

const ActionButtons = ({ transaction, onDelete, onStatusUpdate }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    if (showConfirm) {
      onDelete(transaction.id);
    } else {
      setShowConfirm(true);
      // Reset confirmation after 3 seconds
      setTimeout(() => setShowConfirm(false), 3000);
    }
  };

  const handleStatusChange = (newStatus) => {
    onStatusUpdate(transaction.id, newStatus);
  };

  return (
    <div className="action-buttons">
      {showConfirm ? (
        <>
          <button className="btn btn-danger" onClick={handleDeleteClick}> Confirmer</button>
        
        <button className="btn btn-outline" onClick={() => setShowConfirm(false)}> Annuler
          </button>
        </>
      ) : (
        <>
          <button 
            className="btn btn-primary btn-icon"
            onClick={() => handleStatusChange('completed')}
            title="Marquer comme complété">
          </button>

          <button className="btn btn-outline btn-icon" onClick={() => handleStatusChange('pending')}
            title="Marquer comme en attente">
           </button>

          <button className="btn btn-outline btn-icon" onClick={handleDeleteClick}
            title="Supprimer">
          </button>
        </>
      )}
    </div>
  );
};

export default ActionButtons;