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