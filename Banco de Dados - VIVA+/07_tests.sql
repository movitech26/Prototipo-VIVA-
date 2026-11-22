USE movi;

-- TESTE DE UPDATE

UPDATE USUARIO
SET nome = 'Usuario Atualizado'
WHERE ID_Usuario = 1;


-- TESTE DE DELETE

DELETE FROM META
WHERE ID_Meta = 2;

INSERT INTO USUARIO (
    nome,
    email,
    senha,
    nome_usuario,
    tipo_usuario
)
VALUES (
    'Usuario Sem Atividade',
    'sematividade@movi.com',
    '12345',
    'sematividade',
    'COMUM'
);