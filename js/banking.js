document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = parseFloat(depositInput.value);

  const depositTotal = document.getElementById("deposit-total");
  const previousDeposit = parseFloat(depositTotal.innerText);

  const totalDeposit = previousDeposit + depositAmount;
  depositTotal.innerText = totalDeposit;

  // update account balance
  const Balance = document.getElementById("balance-total");
  const previousBalance = parseFloat(Balance.innerText);
  const currentDeposit = parseFloat(depositTotal.innerText);
  const totalBalance = previousBalance + currentDeposit;
  Balance.innerText = totalBalance;
  // clear input field
  depositInput.value = "";
});

document.getElementById("withdrow-btn").addEventListener("click", function () {
  // console.log("all is done");
  const withdrowInput = document.getElementById("withdrow-input");
  const withdrowInputAmount = parseFloat(withdrowInput.value);
  const withdrowTotal = document.getElementById("withdrow-total");
  const withdrowAmount = parseFloat(withdrowTotal.innerText);
  const totalWithdrowAmount = withdrowInputAmount + withdrowAmount;
  withdrowTotal.innerText = totalWithdrowAmount;

  // update balance status
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceupdate = parseFloat(totalBalance.innerText);
  const totalUpadatedBalance = totalBalanceupdate - withdrowInputAmount;
  totalBalance.innerText = totalUpadatedBalance;
  // clear the input field
  withdrowInput.value = "";
});
