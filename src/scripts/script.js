let formWindow = document.querySelector(".fale-conosco");

function showForm() {
    formWindow.style.left = "750px";
    formWindow.style.opacity = "1";
}

function fecharJanela() {
    formWindow.style.left = "-300px";
    formWindow.style.opacity = "0";
}