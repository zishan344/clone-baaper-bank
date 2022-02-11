function getInput(inputId) {
  const totalAmountInput = document.getElementById(inputId);
  const totalAmountTExt = parseFloat(totalAmountInput.value);
  // clear input field
  totalAmountInput.value = "";
  return totalAmountTExt;
}

function updateField(inputField, amount) {
  const totalElement = document.getElementById(amount);
  const totalText = parseFloat(totalElement.innerText);
  const previousTotal = totalText + inputField;
  totalElement.innerText = previousTotal;
}
function totalBalance(amount, isAdd) {
  const Balance = document.getElementById("balance-total");
  const previousBalance = getcurentBalance();
  if (isAdd == true) {
    const totalBalance = previousBalance + amount;
    Balance.innerText = totalBalance;
  } else {
    const totalBalance = previousBalance - amount;
    Balance.innerText = totalBalance;
  }
}
function getcurentBalance() {
  const Balance = document.getElementById("balance-total");
  const previousBalance = parseFloat(Balance.innerText);
  return previousBalance;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInput("deposit-input");
  if (depositAmount > 0) {
    //updateField
    updateField(depositAmount, "deposit-total");
    // update account balance
    totalBalance(depositAmount, true);
  } else {
    alert("enter a valid number");
  }
});

document.getElementById("withdrow-btn").addEventListener("click", function () {
  const withdrowInputAmount = getInput("withdrow-input");
  const cureentBalance = getcurentBalance();
  if (withdrowInputAmount > 0 && withdrowInputAmount < cureentBalance) {
    // updateField
    updateField(withdrowInputAmount, "withdrow-total");
    // update balance status
    totalBalance(withdrowInputAmount, false);
  } else {
    alert("enter a valid number");
  }
});
