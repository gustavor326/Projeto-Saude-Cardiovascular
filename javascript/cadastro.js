const formulario = document.getElementById('formularioLogin');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const submitButton = document.getElementById('submitButton');

emailInput.addEventListener('input', function() {
    validar();
});

senhaInput.addEventListener('input', function() {
    validar();
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    
    if (validar()) {
        window.location.href = 'usuario_profissional.html'; 
    }
});

function validar() {
    const emailValido = emailInput.value.trim().length !== 0;
    const senhaValida = senhaInput.value.trim().length !== 0;

    submitButton.disabled = !emailValido || !senhaValida;
    return emailValido && senhaValida; 
}









