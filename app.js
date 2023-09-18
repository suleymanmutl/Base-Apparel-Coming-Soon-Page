const input = document.getElementById("input");
const sendBtn = document.querySelector(".arrow");
const errorMsg = document.querySelector(".error-msg");
const errorImg = document.querySelector(".error-img");

function sendEmail() {
  const inputValue = input.value;
  const hasSymbol = inputValue.includes("@");

  if (!hasSymbol) {
    errorImg.style.display = "block";
    errorMsg.style.display = "block";
  } else if (inputValue === "") {
    errorImg.style.display = "none";
    errorMsg.style.display = "none";
  } else {
    errorImg.style.display = "none";
    errorMsg.style.display = "none";
  }
}

sendBtn.addEventListener("click", sendEmail);
