async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      //check response status
      if (response.ok) {
          document.location.replace('/dashboard');
      }
      else {
        console.log(response);
          alert(response.statusText);
      }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);