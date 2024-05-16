function verificarSelecao() {
    const select = document.getElementById('meuSelect');
    const totalOpcoes = select.options.length;
  
   
    let opcoesSelecionadas = 0;
    for (let i = 0; i < totalOpcoes; i++) {
      if (select.options[i].selected) {
        opcoesSelecionadas++;
      }
    }
  
    
    if (opcoesSelecionadas === totalOpcoes) {
      window.location.href = 'pagina-destino.html';
    } else {
      alert('Você precisa selecionar todas as opções para continuar.');
    }
  }
