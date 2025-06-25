 let registeredUser = null;

    function handleRegister() {
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const password = document.getElementById('registerPassword').value;

      if (!fullName || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      // Get existing users or initialize empty array
      const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      // Check if user already exists
      const userExists = users.some(user => user.email === email);
      if (userExists) {
        alert("User already registered with this email.");
        return;
      }

      // Add new user
      users.push({ fullName, email, password });
      localStorage.setItem("registeredUsers", JSON.stringify(users));

      alert("Registration successful! Please login.");
      showLogin();
    }



    function handleLogin() {
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      const matchingUser = users.find(user => user.email === email && user.password === password);

      if (!matchingUser) {
        alert("Invalid credentials.");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(matchingUser)); // Optional: track who logged in
      window.location.href = "index.html";
      document.getElementById('register-btn').textContent = "My Account"
    }


    function logout() {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      alert("Logged out successfully.");
      window.location.href = "index.html";
    }



    function showLogin() {
      document.getElementById('registerForm').classList.add('hidden');
      document.getElementById('sidebox').classList.add('hidden');
      document.getElementById('loginForm').classList.remove('hidden');
      document.getElementById('heading').textContent = "Customer Log In"
    }
    function showRegistration() {
      document.getElementById('loginForm').classList.add('hidden');
      document.getElementById('registerForm').classList.remove('hidden');
      document.getElementById('sidebox').classList.remove('hidden');
    }
        function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }
