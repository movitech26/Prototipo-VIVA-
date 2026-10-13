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
    })


