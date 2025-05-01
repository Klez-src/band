document.querySelector('button').addEventListener('click', function() {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;
  console.log('Name:', name, 'Email:', email, 'Message:', message);
  alert('Form submitted!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  document.querySelector('input[type="text"]').value = '';
  document.querySelector('input[type="email"]').value = '';
  document.querySelector('textarea').value = '';
});
