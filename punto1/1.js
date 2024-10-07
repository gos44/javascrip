const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
  } else {
    alert('Registro exitoso');
  }
});
