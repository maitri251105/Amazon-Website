// username 
const username = localStorage.getItem("userName");
document.getElementById("username").textContent = username;

// bill no.
const billNo = Math.floor(100000 + Math.random() * 900000);
document.getElementById("billNo").textContent = billNo;

const cart = JSON.parse(localStorage.getItem("myCart123456")) || [];
let subtotal = 0;

cart.forEach(item => {
  subtotal += parseInt(item.price) * (item.quantity || 1);
});

document.getElementById("subtotal").textContent = subtotal;

const discountPercent = Math.floor(Math.random() * (45 - 3 + 1)) + 3;
const discountAmount = Math.floor((subtotal * discountPercent) / 100);
const subtotalAfterDiscount = subtotal - discountAmount;

const gstAmount = Math.floor(subtotal * 0.08);
const totalPayable = subtotal - discountAmount + gstAmount;

document.getElementById("discountPercent").textContent = discountPercent;
document.getElementById("discountAmount").textContent = discountAmount;
document.getElementById("gstAmount").textContent = gstAmount;
document.getElementById("totalPayable").textContent = totalPayable;

function payNow() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
  alert(`Payment of ₹${totalPayable} successful!\nPaid by: ${selectedPayment}\nThank you, ${username}!`);

  localStorage.removeItem("myCart123456");
  location.href = "index.html";
}