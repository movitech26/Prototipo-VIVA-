USE movi;
-- INSERT ...

INSERT INTO USUARIO (
nome,
email,
senha,
nome_usuario,
tipo_usuario
)
VALUES (
'Usuario Teste',
'teste@movi.com',
'12345',
'teste',
'COMUM'

);

INSERT INTO PERFIL (
	ID_Usuario,
	peso,
	altura,
	data_nascimento,
	genero

)
VALUES (
	1,
	75.50,
	1.78,
	'2005-08-20',
	'Masculino'
);

INSERT INTO META (
	ID_Usuario,
    descricao,
    valor_objetivo,
    data_inicio,
    data_fim,
    status_meta

)
VALUES (
1,
'PERDER 5KG',
5.00,
'2026-10-06',
'2026-12-31',
'ATIVA'

);

INSERT INTO PONTUACAO (
	ID_Usuario,
    tipo_pontuacao,
    quantidade
)
VALUES (
	1,
    'XP',
    100

);

INSERT INTO CONQUISTA (
    nome_conquista,
    descricao
)
VALUES (
    'Primeiros Passos',
    'Complete sua primeira atividade'
);

INSERT INTO USUARIO_CONQUISTA (
    ID_Usuario,
    ID_Conquista
)
VALUES (
    1,
    1
);

INSERT INTO ATIVIDADE (
    nome_atividade,
    descricao
)
VALUES (
    'Caminhada',
    'Atividade de caminhada leve'
);

INSERT INTO REGISTRO_ATIVIDADES (
    ID_Usuario,
    ID_Atividade,
    duracao_minuto,
    calorias_queimadas
)
VALUES (
    1,
    1,
    30,
    180.00
);

INSERT INTO CATEGORIA_LOCAL (
    nome_categoria
)
VALUES (
    'Academia'
);

INSERT INTO LOCAL_ (
    ID_Categoria,
    nome_local,
    endereco,
    latitude,
    longitude
)
VALUES (
    1,
    'Academia Teste',
    'Rua Exemplo, 100',
    -8.2843000,
    -35.9697000
);

INSERT INTO USUARIO_VISUALIZA_LOCAL (
    ID_Usuario,
    ID_Local
)
VALUES (
    1,
    1
);

INSERT INTO ALIMENTO (
    nome_alimento,
    calorias,
    porcao
)
VALUES (
    'Banana',
    89.00,
    100.00
);

INSERT INTO USUARIO_CONSULTA_ALIMENTO (
    ID_Usuario,
    ID_Alimento
)
VALUES (
    1,
    1
);


-- TESTE PARA DELETE --

INSERT INTO META (
	ID_Usuario,
    descricao,
    valor_objetivo,
    data_inicio,
    data_fim,
    status_meta
)
VALUES (
	1,
    'META TEMPORARIA',
    1.00,
    '2026-10-08',
    '2026-10-09',
    'ATIVA'
);

