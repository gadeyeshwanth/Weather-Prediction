document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'user' && password === 'password') {
      localStorage.setItem('loggedIn', true);
      window.location.href = 'index.html'; // Redirect to home page
    } else {
      alert('Invalid username or password!');
    }
  });
  