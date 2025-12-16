import React, { useEffect, useState } from "react";
import TransactionItem from "../components/TransactionItem";
import { fetchTransactions } from "../services/api";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = (id, newStatus) => {
    setTransactions(prev =>
      prev.map(tx =>
        tx.id === id ? { ...tx, status: newStatus } : tx
      )
    );
  };

  //  Chargement
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-2">Chargement des transactions...</p>
      </div>
    );
  }

  //  Erreur
  if (error) {
    return (
      <div className="alert alert-danger text-center mt-5">
        <p>{error}</p>
        <button className="btn btn-outline-danger" onClick={loadTransactions}>
          Réessayer
        </button>
      </div>
    );
  }

  //  Succès
  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Nom</th>
            <th>Montant</th>
            <th>Statut</th>
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
