function abrirImagem(img) {
    document.getElementById("fotoGrande").src = img.src;
    document.getElementById("janela").style.display = "flex";
}

function fecharImagem() {
    document.getElementById("janela").style.display = "none";
}

function adicionarComentario() {
    let texto = document.getElementById("comentario").value;

    if(texto.trim() === "") {
        return;
    }

    let novoComentario = document.createElement("div");

    novoComentario.className = "comentario";
    novoComentario.textContent = texto;

    document.getElementById("listaComentarios").appendChild(novoComentario);

    document.getElementById("comentario").value = "";
}