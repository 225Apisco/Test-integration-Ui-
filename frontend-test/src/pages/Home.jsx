import React, { useState, useEffect } from "react";
import { transactions as mockTransactions } from "../data/transactions";
import TransactionItem from "../components/TransactionItem";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTransactions(mockTransactions);
      setLoading(false);
    }, 1000);
  }, []);

  // mise à jour le statut d'une transaction
  const updateStatus = (id, newStatus) => {
    const updated = transactions.map(tx =>
      tx.id === id ? { ...tx, status: newStatus } : tx
    );
    setTransactions(updated);
  };

  if (loading) return <p className="text-center mt-5">Chargement...</p>;

  return (
    <div className="container">
      <table className="table table-hover table-bordered">
        <thead className="table-light">
          <tr>
            <th>Nom</th>
            <th>Montant</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <TransactionItem
              key={tx.id}
              transaction={tx}
              onUpdateStatus={updateStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
