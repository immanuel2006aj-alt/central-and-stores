/* ===============================
   PRICE MASTER – CENTRAL & STORES
   Edit ONLY this file to change prices
================================ */

/* 🟢 RICE – PER KG */
const RICE_PRICES = {
  "Raw Rice": 58,
  "Boiled Rice": 55,
  "Ponni Rice": 60,
  "Sona Masoori": 64,
  "Idli Rice": 56,
  "Basmati Rice": 110,
  "Jeera Samba": 90,
  "Seeraga Samba": 92,
  "Kullakar Rice": 85,
  "Karuppu Kavuni": 120,
  "Mapillai Samba": 95
};

/* 🟡 DHAL / PULSES – PER ½ KG (500g) */
const DHAL_PRICES = {
  "Toor Dal": 85,
  "Moong Dal": 78,
  "Urad Dal": 92,
  "Chana Dal": 68,
  "Masoor Dal": 74,
  "Green Gram": 80,
  "Black Gram": 88,
  "Cow Peas": 65,
  "White Peas": 60,
  "Green Peas (Dry)": 70
};

/* ===============================
   COMMON PRICE FUNCTION
================================ */
function getPrice(productName) {

  if (RICE_PRICES[productName]) {
    return {
      price: RICE_PRICES[productName],
      unit: "Kg"
    };
  }

  if (DHAL_PRICES[productName]) {
    return {
      price: DHAL_PRICES[productName],
      unit: "½ Kg"
    };
  }

  return {
    price: 0,
    unit: ""
  };
}
