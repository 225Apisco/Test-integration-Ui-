import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    const configs = {
      completed: {
        label: 'Complété',
        className: 'status-completed',
        icon: '✓'
      },
      pending: {
        label: 'En attente',
        className: 'status-pending',
        
      },
      failed: {
        label: 'Échoué',
        className: 'status-failed',
        
      }
    };
    return configs[status] || configs.pending;
  };

  const config = getStatusConfig(status);

  return (
    <div className={`status-badge ${config.className}`}>
      <span className="status-icon">{config.icon}</span>
      <span className="status-label">{config.label}</span>
    </div>
  );
};

export default StatusBadge;