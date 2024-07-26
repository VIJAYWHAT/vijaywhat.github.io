function validateLogin(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var loadingMessage = document.getElementById('loading-message');

    // Show loading indicator
    loadingMessage.style.display = 'block';

    fetch('credentials.json')
      .then(response => response.json())
      .then(data => {
        var users = data.users;
        var user = users.find(user => user.email === email && user.password === password);

        loadingMessage.style.display = 'none';

        if (user) {
          errorMessage.textContent = '';
          window.location.href = 'dashboard.html';
        } else {
          errorMessage.textContent = 'Invalid email or password.';
        }
      })
      .catch(error => {
        loadingMessage.style.display = 'none';
        errorMessage.textContent = 'An error occurred.';
      });
  }

  document.getElementById('loginForm').addEventListener('submit', validateLogin);