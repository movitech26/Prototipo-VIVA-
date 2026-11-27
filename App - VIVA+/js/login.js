function toggleScreens(screen) {
    const loginScreen = document.getElementById('login-screen');
    const registerScreen = document.getElementById('register-screen');

    if (screen === 'register') {
        loginScreen.classList.remove('active');
        registerScreen.classList.add('active');
    } else {
        registerScreen.classList.remove('active');
        loginScreen.classList.add('active');
    }
}

function toggleSport(button) {
    button.classList.toggle('selected');
}

const formularioLogin = document.querySelector('#login-screen form');

formularioLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    sessionStorage.setItem('acessoLiberado', 'sim');

    window.location.replace('index.html');
})