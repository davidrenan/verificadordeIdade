function verificarIdade() {
    // Obtenha a idade do input
    var idade = parseInt(document.getElementById("idadeInput").value);
  
    // Verifique se a idade é maior ou igual a 18
    if (idade >= 18) {
      document.getElementById("resultado").innerText = "Você é maior de idade.";
    } else {
      document.getElementById("resultado").innerText = "Você é menor de idade.";
    }
  }
  