
    const checkboxTermo = document.getElementById('checkbox-termo');
    const botaoAcessar = document.getElementById('botao-acessar');
    const paginaDestino = 'usuario_profissional.html'; 


    function usuarioAceitouTermos() {
      const aceiteArmazenado = localStorage.getItem('aceiteTermos');
      return aceiteArmazenado === 'true';
    }

 
    if (usuarioAceitouTermos()) {
      checkboxTermo.checked = false;
      botaoAcessar.disabled = true;
    }

    checkboxTermo.addEventListener('change', function() {
      if (this.checked) {
        botaoAcessar.disabled = false;
      } else {
        botaoAcessar.disabled = true;
      }
    });

    botaoAcessar.addEventListener('click', function() {
      if (checkboxTermo.checked) {
        if (confirm('Você realmente leu e aceitou os termos de acordo?')) {
          localStorage.setItem('aceiteTermos', 'true');
          window.location.href = paginaDestino;
        } else {
          alert('Você precisa confirmar que aceita os termos para continuar.');
        }
      } else {
        alert('Você precisa aceitar os termos para continuar.');
      }
    });

  
  