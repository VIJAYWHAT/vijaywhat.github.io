function validateLogin(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('error-message');
  var loadingMessage = document.getElementById('loading-message');

  // Show loading indicator
  loadingMessage.style.display = 'block';

  // Load the token from public/token.js
  fetch('/token.js')
    .then(response => response.text())
    .then(tokenScript => {
      var token = tokenScript.split('=')[1].trim();  // Extract the token value

      // GitHub API URL for the raw credentials.json file
      var githubApiUrl = 'https://api.github.com/repos/VIJAYWHAT/vj-datas/contents/credentials.json';

      fetch(githubApiUrl, {
        headers: {
          'Authorization': 'token ' + token,
          'Accept': 'application/vnd.github.v3.raw'
        }
      })
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
        console.error('Error fetching credentials:', error);
      });
    })
    .catch(error => {
      loadingMessage.style.display = 'none';
      errorMessage.textContent = 'An error occurred.';
      console.error('Error loading token:', error);
    });
}

document.getElementById('loginForm').addEventListener('submit', validateLogin);

