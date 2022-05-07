const loginFormHandler = async (event) => {
  event.preventDefault();
  //need id's for input fields for login
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signup-name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  console.log(username, email, password);
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
//need submit button for login and signup, change class
document
  .querySelector('.btn')
  .addEventListener('click', loginFormHandler);
document
  .querySelector('.signupBtn')
  .addEventListener('click', signupFormHandler);