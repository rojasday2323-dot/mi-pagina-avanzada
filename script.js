const botonTema = document.getElementById('tema-btn');
const body = document.body;

botonTema.addEventListener('click', () => {
    body.classList.toggle('rosa');

    if (body.classList.contains('rosa')) {
        botonTema.textContent = 'Cambiar a Claro';
    } else {
        botonTema.textContent = 'Cambiar Tema';
    }
});

