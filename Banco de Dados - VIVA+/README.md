# MOVI_BD — Banco de Dados

## Sobre o projeto

O **MOVI_BD** é o banco de dados relacional desenvolvido em MySQL para o projeto MOVI, integrante do protótipo VIVA+.

O repositório contém os scripts SQL utilizados na construção, configuração, alimentação e realização de consultas e testes do banco.

## Tecnologias utilizadas

- MySQL
- MySQL Workbench
- SQL
- Git e GitHub

## Estrutura dos arquivos

| Arquivo | Finalidade |
|---|---|
| `01_schema.sql` | Criação e seleção do banco de dados. |
| `02_tables.sql` | Definição das tabelas. |
| `03_relations.sql` | Configuração dos relacionamentos. |
| `04_alterations.sql` | Alterações na estrutura do banco. |
| `05_seed.sql` | Inserção de dados fictícios para desenvolvimento e testes. |
| `06_queries.sql` | Consultas SQL utilizadas no projeto. |
| `07_tests.sql` | Scripts destinados à realização de testes. |

## Como utilizar

### 1. Preparar o ambiente

Instale o MySQL Server e o MySQL Workbench.

Abra o Workbench e estabeleça uma conexão com seu servidor MySQL.

### 2. Criar o banco

Abra o arquivo `01_schema.sql` e execute seus comandos.

O schema utilizado pelo projeto é `movi`.

### 3. Executar os demais scripts

Os arquivos estão numerados para facilitar a organização. A sequência inicial sugerida é:

1. `01_schema.sql`
2. `02_tables.sql`
3. `03_relations.sql`
4. `04_alterations.sql`
5. `05_seed.sql`

**Atenção:** confirme as dependências entre os scripts antes de executar todos em um banco vazio. Os arquivos `06_queries.sql` e `07_tests.sql` devem ser utilizados conforme a finalidade das consultas e dos testes.

### 4. Verificar a instalação

No MySQL Workbench, execute:

```sql
USE movi;
SHOW TABLES;
```

O comando deverá listar as tabelas criadas no banco.

## Dados de desenvolvimento

O projeto utiliza dados fictícios para auxiliar o desenvolvimento e a realização de testes.

Esses dados não devem ser confundidos com informações reais de usuários.

Em uma futura implementação de autenticação, as senhas deverão ser armazenadas utilizando algoritmos apropriados de hash, nunca em texto puro.

## Versionamento

O banco é versionado no GitHub junto ao projeto VIVA+.

As alterações devem ser registradas em commits e integradas conforme o fluxo de trabalho definido pela equipe.

## Observações

- Não publique credenciais de acesso ao banco.
- Evite executar scripts destrutivos sem verificar seu conteúdo.
- Utilize um banco de testes antes de aplicar alterações em ambientes compartilhados.
- Documente mudanças estruturais para facilitar a colaboração entre os integrantes.

---

**Projeto:** MOVI / VIVA+  
**Componente:** Banco de Dados  
**Tecnologia principal:** MySQL