const form = document.getElementById("registrationForm");
const errorMsg = document.getElementById("errMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmPassword").value;

  if (username.length < 3) {
    errormsg("must be at least of 3 length! ");
    return;
  }

  const emailCheck = /^\S+@\S+\.\S+$/;
  if (!emailCheck.test(email)) {
    errormsg("Not valid email");
    return;
  }

  if (password.length < 8) {
    errormsg("password must be of at least 8 characters! ");
    return;
  }

  if (password !== confirmpassword) {
    errormsg("password not match! ");
    return;
  }

  errormsg("");
  alert("Registration successfull !");
  form.reset();
});

function errormsg(message) {
  errorMsg.textContent = message;
}
