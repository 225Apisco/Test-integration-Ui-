import React from 'react';
import StatusBadge from './StatusBadge';
import ActionButtons from './ActionButtons';

const TransactionItem = ({ transaction, onDelete, onStatusUpdate }) => {
  const formatDate = (dateString) => {
    const options = { Jour: 'numerique', mois: 'court', année: 'numerique' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  const formatAmount = (amount) => {
    const formatted = Math.abs(amount).toFixed(2);
    return amount < 0 ? `-${formatted} FCFA` : `+${formatted} FCFA`;
  };

  return (
    <div className="transaction-item">
      <div className="transaction-cell" data-label="Date">
        <div className="transaction-date">
          {formatDate(transaction.date)}
        </div>
      </div>
      
      <div className="transaction-cell" data-label="Description">
        <div className="transaction-description">
          <h3>{transaction.description}</h3>
          <p>{transaction.category} • {transaction.beneficiary}</p>
        </div>
      </div>
      
      <div className="transaction-cell" data-label="Montant">
        <div className={`transaction-amount ${transaction.amount < 0 ? 'amount-negative' : 'amount-positive'}`}>
          {formatAmount(transaction.amount)}
        </div>
      </div>
      
      <div className="transaction-cell" data-label="Statut">
        <StatusBadge status={transaction.status} />
      </div>
      
      <div className="transaction-cell" data-label="Actions">
        <ActionButtons 
          transaction={transaction}
          onDelete={onDelete}
          onStatusUpdate={onStatusUpdate}
        />
      </div>
    </div>
  );
};

export default TransactionItem;