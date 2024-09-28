document.getElementById("calculateBtn").addEventListener("click", function () {
  let billAmount = parseFloat(document.getElementById("billAmount").value);
  let tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  if (
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    billAmount <= 0 ||
    tipPercentage < 0
  ) {
    alert("Пожалуйста, введите корректные значения.");
    return;
  }

  let totalTip = (billAmount * (tipPercentage / 100)).toFixed(2);

  document.getElementById(
    "totalTip"
  ).textContent = `Итоговые чаевые: ${totalTip} сом`;
});
