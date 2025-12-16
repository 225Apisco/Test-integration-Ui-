export async function fetchTransactions() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des données");
  }

  const data = await response.json();

  // Transformation des données API → transactions
  return data.slice(0, 10).map(post => ({
    id: post.id,
    name: post.title,
    amount: Math.floor(Math.random() * 10000) + 1000,
    status: "en attente"
  }));
}
