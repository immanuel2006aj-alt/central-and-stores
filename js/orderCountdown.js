/* ================================
   ORDER COUNTDOWN HANDLER
   ================================ */

let countdownTimer = null;

function startOrderCountdown() {

  const placeBtn = document.getElementById("placeOrderBtn");
  const overlay = document.getElementById("orderOverlay");
  const counter = document.getElementById("countdown");

  if (!placeBtn || !overlay || !counter) {
    console.error("Countdown elements missing");
    return;
  }

  // prevent double click
  if (placeBtn.disabled) return;
  placeBtn.disabled = true;

  let seconds = 3;
  counter.innerText = seconds;
  overlay.style.display = "flex";

  countdownTimer = setInterval(() => {
    seconds--;
    counter.innerText = seconds;

    if (seconds <= 0) {
      clearInterval(countdownTimer);
      submitFinalOrder();
    }
  }, 1000);
}

/* ================================
   FINAL ORDER SUBMIT
   ================================ */

async function submitFinalOrder() {
  try {
    // 🔔 CALL YOUR EXISTING TELEGRAM FUNCTION
    await sendOrderToTelegram();

    // cleanup
    localStorage.removeItem("cart");
    localStorage.removeItem("cartForm");

    window.location.href = "success.html";

  } catch (err) {
    alert("Order failed. Please try again.");
    console.error(err);

    document.getElementById("orderOverlay").style.display = "none";
    document.getElementById("placeOrderBtn").disabled = false;
  }
                            }
