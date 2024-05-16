function valor(){

    var checkbox1 = document.getElementById('Usuario')
    var checkbox2 = document.getElementById('Profissional')

    var valor_checkbox1 = checkbox1.checked
    var valor_checkbox2 = checkbox2.checked

   if(valor_checkbox1 == true){
        window.location.href = "cadastro_usuario.html"
    }


   if(valor_checkbox2 == true){
        window.location.href = "cadastro_profissional.html"
   }
}

