import React, { useState } from 'react';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import { transactions as initialTransactions } from './data/transactions';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  
  const handleDelete = (id) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };
  
  const handleStatusUpdate = (id, newStatus) => {
    setTransactions(prev => prev.map(transaction => 
      transaction.id === id ? { ...transaction, status: newStatus } : transaction
    ));
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <TransactionList 
            transactions={transactions}
            onDelete={handleDelete}
            onStatusUpdate={handleStatusUpdate}
          />
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p>Application de gestion de transactions • Test technique Frontend</p>
        </div>
      </footer>
    </div>
  );
}

export default App;