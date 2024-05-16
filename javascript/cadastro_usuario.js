
const cpfInput = document.getElementById('cpf1');

cpfInput.addEventListener('input', function() {
    formatarCPF();
    validarCPF();
});

function formatarCPF() {
    let cpf_formatação = cpfInput.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    cpf_formatação = cpf_formatação.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpf_formatação = cpf_formatação.slice(0, 14); // Limita a 9 dígitos
    cpfInput.value = cpf_formatação;
}

function validarCPF() {
    const cpfValido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/.test(cpfInput.value);

}




document.getElementById('cadastroForm2').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validações
    let nome = document.getElementById('nome1').value;
    let cpf = document.getElementById('cpf1').value;
    let dataNascimento = document.getElementById('dataNascimento1').value;
    let endereco = document.getElementById('endereco1').value;
    let email = document.getElementById('email1').value;

    if (!/^[A-Za-z\s]+$/.test(nome)) {
        alert('Nome deve conter apenas letras.');
        return;
    }

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        alert('CPF deve estar no formato 000.000.000-00.');
        return;
    }
    
    if (!dataNascimento) {
        alert('Data de nascimento é obrigatória.');
        return;
    }

    if (!endereco.trim()) {
        alert('Endereço é obrigatório.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email inválido.');
        return;
    }

    
    window.location.href = 'dados_fixo_usuário.html';
});




























