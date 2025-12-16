import React, { useState, useMemo } from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onDelete, onStatusUpdate }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Calcul du total
  const getTotalAmount = () => {
    return transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  // Filtrer les transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      if (filterStatus === 'all') return true;
      return transaction.status === filterStatus;
    });
  }, [transactions, filterStatus]);

  // Trier les transactions
  const sortedTransactions = useMemo(() => {
    const sorted = [...filteredTransactions].sort((a, b) => {
      let aValue, bValue;
      
      switch(sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case 'amount':
          aValue = a.amount;
          bValue = b.amount;
          break;
        case 'description':
          aValue = a.description.toLowerCase();
          bValue = b.description.toLowerCase();
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    return sorted;
  }, [filteredTransactions, sortBy, sortOrder]);

  // Statistiques par statut
  const statusStats = useMemo(() => {
    const stats = {
      all: transactions.length,
      completed: 0,
      pending: 0,
      failed: 0
    };
    
    transactions.forEach(transaction => {
      if (stats[transaction.status] !== undefined) {
        stats[transaction.status]++;
      }
    });
    
    return stats;
  }, [transactions]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (column) => {
    if (sortBy !== column) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="transaction-list">
      {/* En-tête avec filtres et statistiques */}
      <div className="list-header">
        <div className="header-left">
          <h2>Historique des transactions</h2>
          <p className="subtitle">Gérez et suivez vos transactions financières</p>
        </div>
        
        <div className="summary">
          <div className="summary-item">
            <span className="summary-label">Total</span>
            <span className="summary-value total-amount">
              {getTotalAmount().toFixed(2)} €
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Transactions</span>
            <span className="summary-value total-count">
              {transactions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filtres et contrôles */}
      <div className="list-controls">
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="status-filter" className="filter-label">
              Filtrer par statut:
            </label>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                Tous ({statusStats.all})
              </button>
              <button
                className={`filter-btn status-completed ${filterStatus === 'completed' ? 'active' : ''}`}
                onClick={() => setFilterStatus('completed')}
              >
                Complétés ({statusStats.completed})
              </button>
              <button
                className={`filter-btn status-pending ${filterStatus === 'pending' ? 'active' : ''}`}
                onClick={() => setFilterStatus('pending')}
              >
                En attente ({statusStats.pending})
              </button>
              <button
                className={`filter-btn status-failed ${filterStatus === 'failed' ? 'active' : ''}`}
                onClick={() => setFilterStatus('failed')}
              >
                Échoués ({statusStats.failed})
              </button>
            </div>
          </div>
        </div>

        <div className="sort-controls">
          <span className="sort-label">Trier par:</span>
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="amount">Montant</option>
            <option value="description">Description</option>
          </select>
          <button 
            className="sort-order-btn"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            title={sortOrder === 'asc' ? 'Tri croissant' : 'Tri décroissant'}
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* Tableau des transactions */}
      <div className="table-container">
        <div className="table-header">
          <div 
            className="header-cell sortable"
            onClick={() => handleSort('date')}
          >
            <span>Date</span>
            <span className="sort-icon">{getSortIcon('date')}</span>
          </div>
          <div 
            className="header-cell sortable"
            onClick={() => handleSort('description')}
          >
            <span>Description</span>
            <span className="sort-icon">{getSortIcon('description')}</span>
          </div>
          <div 
            className="header-cell sortable"
            onClick={() => handleSort('amount')}
          >
            <span>Montant</span>
            <span className="sort-icon">{getSortIcon('amount')}</span>
          </div>
          <div className="header-cell">Statut</div>
          <div className="header-cell">Actions</div>
        </div>
        
        <div className="table-body">
          {sortedTransactions.length > 0 ? (
            sortedTransactions.map(transaction => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={onDelete}
                onStatusUpdate={onStatusUpdate}
              />
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📊</div>
              <h3>Aucune transaction trouvée</h3>
              <p>
                {filterStatus === 'all' 
                  ? 'Commencez par ajouter une transaction' 
                  : `Aucune transaction avec le statut "${filterStatus}"`}
              </p>
              {filterStatus !== 'all' && (
                <button 
                  className="btn btn-primary"
                  onClick={() => setFilterStatus('all')}
                >
                  Voir toutes les transactions
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Pied de tableau */}
        {sortedTransactions.length > 0 && (
          <div className="table-footer">
            <div className="footer-info">
              <span>
                Affichage de {sortedTransactions.length} transaction{sortedTransactions.length > 1 ? 's' : ''}
              </span>
              <span className="footer-filter">
                {filterStatus !== 'all' && (
                  <>Filtré par: <strong>{filterStatus}</strong></>
                )}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Statistiques détaillées */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon completed">✓</div>
          <div className="stat-content">
            <h4>Complétés</h4>
            <p className="stat-value">{statusStats.completed}</p>
            <p className="stat-percentage">
              {transactions.length > 0 
                ? `${Math.round((statusStats.completed / transactions.length) * 100)}%`
                : '0%'
              }
            </p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon pending">⏱️</div>
          <div className="stat-content">
            <h4>En attente</h4>
            <p className="stat-value">{statusStats.pending}</p>
            <p className="stat-percentage">
              {transactions.length > 0 
                ? `${Math.round((statusStats.pending / transactions.length) * 100)}%`
                : '0%'
              }
            </p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon failed">✗</div>
          <div className="stat-content">
            <h4>Échoués</h4>
            <p className="stat-value">{statusStats.failed}</p>
            <p className="stat-percentage">
              {transactions.length > 0 
                ? `${Math.round((statusStats.failed / transactions.length) * 100)}%`
                : '0%'
              }
            </p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon total">💰</div>
          <div className="stat-content">
            <h4>Solde total</h4>
            <p className="stat-value">{getTotalAmount().toFixed(2)} FCFA</p>
            <p className="stat-percentage">
              {transactions.length} transaction{transactions.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;