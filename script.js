function generateBill() {
  // Fill bill data
  document.getElementById("outName").innerText = document.getElementById("name").value;
  document.getElementById("outAccount").innerText = document.getElementById("account").value;
  document.getElementById("outNumber").innerText = document.getElementById("number").value;
  document.getElementById("outDate").innerText = document.getElementById("date").value;
  document.getElementById("outTime").innerText = document.getElementById("time").value;
  document.getElementById("outAmount").innerText = document.getElementById("amount").value;
  document.getElementById("outStatus").innerText = document.getElementById("status").value;

  // Hide form and show bill
  document.getElementById("billForm").style.display = "none";
  document.getElementById("billOutput").style.display = "block";
}

// Generate + Print directly
function printAfterGenerate() {
  generateBill();
  setTimeout(() => {
    window.print();
  }, 300);
}
