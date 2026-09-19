# CineTrack

MVP web responsivo desenvolvido em React para descoberta e organização de filmes e séries.

## Integrantes

- Felipe Romano de Paula Souza — RM 571653
- Lucas Zarantonelli Lourenço — RM 569164

## Problema

Com a grande quantidade de filmes e séries disponíveis, muitas pessoas têm dificuldade para descobrir novos conteúdos, encontrar informações rapidamente e organizar o que desejam assistir depois.

## Solução

O CineTrack reúne descoberta, busca, detalhes e uma lista pessoal em uma única interface. O usuário pode navegar por filmes e séries populares, pesquisar títulos, abrir uma página de detalhes e salvar conteúdos em "Minha Lista" durante a sessão.

## Tecnologias

- React
- Vite
- React Router
- React Icons
- CSS
- TMDB API

## API utilizada

The Movie Database (TMDB).

A API é utilizada para carregar filmes populares, séries populares, resultados de busca e informações detalhadas de cada conteúdo.

## Funcionalidades

- Home com filmes populares
- Home com séries populares
- Busca de filmes e séries
- Página de detalhes com rota dinâmica
- Minha Lista
- Adicionar itens à lista
- Remover itens da lista
- Estados de carregamento e erro
- Busca sem resultados
- Lista vazia
- Layout responsivo

## Uso de IA

O uso de IA foi moderado e utilizado como apoio ao processo de desenvolvimento, principalmente na organização visual e no design da interface

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto. Use `.env.example` como modelo:

```env
VITE_TMDB_TOKEN=seu_api_read_access_token
```

3. Inicie o Vite:

```bash
npm run dev
```

## Documentação

A pasta `docs/` contém:

- `requirements.md`
- `architecture.md`
- `references/references.md`
- imagens de referência em `docs/references/`

## TMDB

Este produto utiliza a API do TMDB, mas não é endossado ou certificado pelo TMDB.
