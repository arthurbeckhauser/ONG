document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let none = document.getElementById("nome").value;
    let email = document.getElementById("email").value:
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked')

    if(none.lenght < 3) return alert("Nome Inválido");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + this.nodeName;

});