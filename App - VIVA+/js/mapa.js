const locais = [
    {
        id: 1,
        nome: "Ciclovia - Via parque",
        categoria: "Ciclovia",
        imagem: "depois vou incluir",
        icone:"🚴"
    },
    {
        id: 2,
        nome: "Ciclovia — Açude de Tabocas",
        endereco: "Entorno do Açude Tabocas, Caruaru-PE",
        categoria: "Ciclovias",
        imagem: "depois vou incluir",
        icone: "🚴"
    },
    {
        id: 3,
        nome: "Pista de Skate — Parque da Cidade",
        endereco: "Parque da Cidade, Caruaru-PE",
        categoria: "Pistas de Skate",
        imagem: "depois vou incluir",
        icone: "🛹"
    },
    {
        id: 4,
        nome: "Quadra de Areia — Praça da Saudade",
        endereco: "Praça da Saudade, Centro, Caruaru-PE",
        categoria: "Quadras de Areia",
        imagem: "depois vou incluir",
        icone: "🏐"
    },
    {
        id: 5,
        nome: "Academia ao Ar Livre — Parque 18 de Maio",
        endereco: "Parque 18 de Maio, Caruaru-PE",
        categoria: "Academias",
        imagem: "depois vou incluir",
        icone: "🏋️"
    },
    {
        id: 6,
        nome: "Quadra de Basquete — Ginásio Municipal",
        endereco: "Ginásio Municipal, Caruaru-PE",
        categoria: "Basquete",
        imagem: "depois vou incluir",
        icone: "🏀"
    }
]

function mostrarcards (categoria) {
    const container = document.getElementById("lista-de-cards");
    const textoQuantidade = document.querySelector(".quantidade-de-locais");

    let filtrados;
    if (categoria === 'Todos') {
        filtrados = locais;
    } else {
        filtrados = locais.filter(local => local.categoria === categoria)
    }

    textoQuantidade.textContent = `${filtrados.length} locais encontrados`;

    container.innerHTML = '';

    filtrados.forEach (local =>  {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${local.imagem}" alt="${local.nome}">
            <div class="card-info">
                <div class="card-info">
                    <span>${local.icone}</span>
                    <span>${local.nome}</span>
                </div>
                <div class="card-endereco">
                    <span>📍</span>
                    <span>${local.endereco}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    })
}

const botoes = document.querySelectorAll (".filtro")
    botoes.forEach(botao =>{
        botao.addEventListener('click', () => {
            
            botoes.forEach(rmv => {
                rmv.classList.remove("ativo")
            })
            botao.classList.add("ativo")

            const categoria = botao.textContent.trim();
            mostrarcards(categoria);
        })
    })

mostrarcards('Todos');