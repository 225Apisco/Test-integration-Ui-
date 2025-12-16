import React from "react";
import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";

export default function TransactionItem({ transaction, onUpdateStatus }) {
  return (
    <tr>
      <td>{transaction.name}</td>
      <td>{transaction.amount} CFA</td>
      <td><StatusBadge status={transaction.status} /></td>
      <td>
        <ActionButton
          label="Valider"
          onClick={() => onUpdateStatus(transaction.id, "validée")}
        />
        <ActionButton
          label="Annuler"
          onClick={() => onUpdateStatus(transaction.id, "annulée")}
        />
      </td>
    </tr>
  );
}
