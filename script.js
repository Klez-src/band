document.querySelector('button').addEventListener('click', function() {
  const name = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;
  const message = document.querySelector('textarea').value;
  console.log('Name:', name, 'Password:', password, 'Message:', message);
  alert('Form submitted!\nName: ' + name + '\nMessage: ' + message);
  document.querySelector('input[type="text"]').value = '';
  document.querySelector('input[type="password"]').value = '';
  document.querySelector('textarea').value = '';
});
