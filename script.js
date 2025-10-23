const botonTema = document.getElementById('tema-btn');
const body = document.body;

botonTema.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        botonTema.textContent = 'Cambiar a Claro';
    } else {
        botonTema.textContent = 'Cambiar Tema';
    }
});

