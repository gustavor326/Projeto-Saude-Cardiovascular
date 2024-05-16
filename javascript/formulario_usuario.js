const formularios = document.querySelectorAll('.formulario');
const botaoEnviar = document.getElementById('botaoEnviar');
const paginaDestino = 'formularios_parametros_usuarios.html'; // Substitua por URL real

function verificarOpcoesMarcadas() {
    let peloMenosUmaOpcaoMarcada = true;
    let todasOpcoesMarcadas = true;

    for (const formulario of formularios) {
        const opcoes = formulario.querySelectorAll('input[type="radio"]');

        peloMenosUmaOpcaoMarcada = false;
        todasOpcoesMarcadas = true;

        for (const opcao of opcoes) {
            if (opcao.checked) {
                peloMenosUmaOpcaoMarcada = true;
                break;
            }

            if (!opcao.checked) {
                todasOpcoesMarcadas = true;
            }
        }

        if (!peloMenosUmaOpcaoMarcada) {
            break;
        }
    }

    botaoEnviar.disabled = !peloMenosUmaOpcaoMarcada || !todasOpcoesMarcadas;
}

formularios.forEach(formulario => {
    formulario.addEventListener('change', verificarOpcoesMarcadas);
});

botaoEnviar.addEventListener('click', function() {
    if (botaoEnviar.disabled === false) {
        window.location.href = paginaDestino;
    }
});
