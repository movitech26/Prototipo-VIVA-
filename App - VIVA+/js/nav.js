if (sessionStorage.getItem('acessoLiberado') !== 'sim') {
    window.location.replace('login.html');
} else {

    fetch('nav.html')
        .then(res => res.text())
        .then(data => {

            document.getElementById('cabecalhonav').innerHTML = data;

            const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

            const links = document.querySelectorAll('.cabecalho nav a');

            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === paginaAtual) {
                    link.classList.add('ativo');
                }
            });

            //Menu hamburguer

            const botaoMenu = document.querySelector('.botao-menu');
            const menu = document.getElementById('menu-navegacao');

            botaoMenu.addEventListener('click', () => {
                const aberto = menu.classList.toggle('aberto');

                botaoMenu.textContent = aberto ? '✕' : '☰';

                botaoMenu.setAttribute('aria-expanded', aberto);
                botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
            });


        })

    }