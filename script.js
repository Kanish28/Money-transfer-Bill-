function generateBill() {
  document.getElementById("outName").innerText = document.getElementById("name").value;
  document.getElementById("outAccount").innerText = document.getElementById("account").value;
  document.getElementById("outNumber").innerText = document.getElementById("number").value;
  document.getElementById("outDate").innerText = document.getElementById("date").value;
  document.getElementById("outTime").innerText = document.getElementById("time").value;
  document.getElementById("outAmount").innerText = document.getElementById("amount").value;
  document.getElementById("outStatus").innerText = document.getElementById("status").value;

  document.getElementById("billOutput").style.display = "block";
}

// Generate bill + auto print
function printAfterGenerate() {
  generateBill();
  setTimeout(() => {
    window.print();
  }, 300); // small delay so bill renders before printing
}
