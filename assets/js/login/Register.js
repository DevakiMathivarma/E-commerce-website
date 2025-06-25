window.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("register-btn");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Update button label
    if (registerBtn) {
      registerBtn.textContent = isLoggedIn === "true" ? "Log Out" : "Register Now";

      // Set click behavior
      registerBtn.addEventListener("click", function () {
        if (localStorage.getItem("isLoggedIn") === "true") {
          // Log out
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("currentUser");
          alert("Logged out successfully.");
          registerBtn.textContent = "Register Now";
          location.reload(); // refresh page to reflect logout
        } else {
          // Go to registration/login page
          window.location.href = "register.html"; // change if your file is different
        }
      });
    }
  });