document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (password === confirmPassword) {
      // Save user data to localStorage (for demo purposes)
      localStorage.setItem(username, password);
      alert('Registration successful! Please login.');
      window.location.href = 'login.html';
    } else {
      alert('Passwords do not match!');
    }
  });
  