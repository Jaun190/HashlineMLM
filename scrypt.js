document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  if (!productList) return;

  // Beispielhafte Produktdaten – alternativ aus JSON-Datei laden
  const products = [
    {
      id: "asic-01",
      name: "Bitmain Antminer S19 Pro",
      price: 2990,
      desc: "110 TH/s SHA-256 Miner mit hoher Effizienz",
    },
    {
      id: "asic-02",
      name: "Whatsminer M30S++",
      price: 2690,
      desc: "112 TH/s Bitcoin Miner mit hoher Performance",
    },
    {
      id: "asic-03",
      name: "Goldshell KD6",
      price: 4500,
      desc: "26.3 TH/s Kadena Miner – für KDA Mining",
    },
  ];

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <strong>CHF ${p.price}.–</strong><br/>
      <button onclick="buyProduct('${p.id}')">Kaufen</button>
    `;
    productList.appendChild(card);
  });
});

function buyProduct(productId) {
  alert("Stripe-Kauf für Produkt: " + productId + " wird simuliert.");
  // Hier Stripe-Checkout oder Supabase-Bestellung einbauen
}
