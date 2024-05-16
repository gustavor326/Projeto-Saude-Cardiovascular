const cpfInput = document.getElementById('cpf2');

cpfInput.addEventListener('input', function() {
    formatarCPF();
    validarCPF();
});

function formatarCPF() {
    let cpf_formata = cpfInput.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    cpf_formata = cpf_formata.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    cpf_formata = cpf_formata.slice(0, 14); // Limita a 9 dígitos
    cpfInput.value = cpf_formata;
}

function validarCPF() {
    const cpfValido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/.test(cpfInput.value);

}



document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome2').value;
    let cpf = document.getElementById('cpf2').value;
    let dataNascimento = document.getElementById('dataNascimento2').value;
    let endereco = document.getElementById('endereco2').value;
    let email = document.getElementById('email2').value;
    let crm = document.getElementById('crm2').value;
    let especialidade = document.getElementById('especialidade2').value;
    let carteiraProfissional = document.getElementById('carteiraProfissional2').files[0];

    if (!/^[A-Za-z\s]+$/.test(nome)) {
        alert('Nome deve conter apenas letras.');
        return;
    }

    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        alert('CPF deve estar no formato 000.000.000-00.');
        return;
    }

    if (!/^\d{6}$/.test(crm)) {
        alert('CRM deve conter exatamente 6 dígitos.');
        return;
    }

    if (!carteiraProfissional) {
        alert('Anexe sua carteira profissional.');
        return;
    }

    window.location.href = 'portal_profissional.html';
});