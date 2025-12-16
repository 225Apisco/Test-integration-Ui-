import React from "react";

export default function StatusBadge({ status }) {
  let colorClass = "secondary";

  if (status === "validée") colorClass = "success";
  else if (status === "en attente") colorClass = "warning";
  else if (status === "annulée") colorClass = "danger";

  return <span className={`badge bg-${colorClass}`}>{status}</span>;
}
