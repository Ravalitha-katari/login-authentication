// Store registered users in local storage
let users = localStorage.getItem('users');
if (!users) {
  users = {};
  localStorage.setItem('users', JSON.stringify(users));
}

// Register user
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password === confirmPassword) {
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
  } else {
    alert('Passwords do not match!');
  }
});

// Login user
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (users[username] === password) {
    localStorage.setItem('authenticated', true);
    window.location.href = 'secured.html';
  } else {
    alert('Invalid username or password!');
  }
});

// Check if user is authenticated
if (localStorage.getItem('authenticated') === 'true') {
  window.location.href = 'secured.html';
}