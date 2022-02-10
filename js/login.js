document.getElementById("login-btn").addEventListener("click", function () {
  console.log("don the click");
  const userEmail = document.getElementById("user-email");
  const userPassword = document.getElementById("user-password");
  if (userEmail.value == "ami@gmail.com" && userPassword.value == "269198") {
    window.location.href = "banking.html";
  } else {
    alert("ha ha cori korte asco naki ");
  }
});
