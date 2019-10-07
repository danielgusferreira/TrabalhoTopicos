fetch("./cursos.json") 
  .then( function(resposta) {
    resposta.json()
  .then( function(obj) {
    obj.forEach(function(element) { 

      if(element.id == 1){
        console.log(element.nome.toString());
        document.getElementById("idnome1").innerText = element.nome;
        document.getElementById("idvalor1").innerText = element.valor.toString();
      }
      else if(element.id == 2){
        document.getElementById("idnome2").innerText = element.nome.toString();
        document.getElementById("idvalor2").innerText = element.valor.toString();
      }
      else{
        document.getElementById("idnome3").innerText = element.nome.toString();
        document.getElementById("idvalor3").innerText = element.valor.toString();
      }
    })  
})
});