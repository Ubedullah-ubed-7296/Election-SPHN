function validateLogin() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;

  const correctUsername = "Kanchana";
  const correctPassword = "Kanchanaraveendran@2025";

  if (username === correctUsername && password === correctPassword) {
    alert("Login Successful!");
    // Redirect to another page (you can change the URL)
    window.location.href = "../club-page/club-page.html";
    return false; // prevent default form submission
  } else {
    alert("Invalid username or password. Please try again.");
    return false; // stop form from submitting
  }
}

function clearFields() {
  document.getElementById("uname").value = "";
  document.getElementById("psw").value = "";
}