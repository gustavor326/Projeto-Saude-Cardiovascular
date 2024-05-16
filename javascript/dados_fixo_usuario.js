export default SalvarButton;

const salvarButton = document.getElementById('salvarButton');

salvarButton.addEventListener('click', function() {
  window.location.href = '/portal_usuario';
});
  