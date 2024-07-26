
function validateLogin() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('error-message');

  fetch('credentials.json')
    .then(response => response.json())
    .then(data => {
      var users = data.users;
      var user = users.find(user => user.email === email && user.password === password);

      if (user) {
        errorMessage.textContent = '';
        window.location.href = 'dashboard.html';
      } else {
        errorMessage.textContent = 'Invalid email or password.';
      }
    })
    .catch(error => {
      errorMessage.textContent = 'An error occurred.';
    });
}
