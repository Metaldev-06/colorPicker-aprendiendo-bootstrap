let btn = document.getElementById('btn');

let selector = document.getElementById('color').value;
let hexa = document.getElementById('hexa');
let visualizador = document.getElementById('visualizador');

hexa.textContent = selector;
visualizador.style.backgroundColor = selector;


btn.addEventListener('click', () => {
    selector = document.getElementById('color').value;
    hexa.textContent = selector;
    visualizador.style.backgroundColor = selector;

    navigator.clipboard
        .writeText(selector)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});