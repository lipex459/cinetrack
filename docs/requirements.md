# CineTrack — Requirements

## 1. Objetivo

O CineTrack é uma plataforma web responsiva para ajudar usuários a descobrir filmes e séries e organizar conteúdos que desejam assistir.

## 2. Problema

Com a grande quantidade de filmes e séries disponíveis, muitos usuários encontram dificuldade para decidir o que assistir, encontrar informações sobre um título e lembrar de conteúdos que desejam assistir futuramente.

## 3. Público-alvo

Pessoas que assistem filmes e séries com frequência, especialmente usuários de serviços de streaming que gostam de descobrir e salvar recomendações.

## 4. Solução

O CineTrack permite visualizar conteúdos populares, pesquisar filmes e séries, abrir uma página de detalhes e manter uma lista pessoal durante a sessão.

## 5. User Stories

- Como usuário, quero visualizar filmes e séries populares para descobrir novos conteúdos.
- Como usuário, quero pesquisar conteúdos pelo nome para encontrar um título específico.
- Como usuário, quero visualizar os detalhes de um conteúdo para decidir se tenho interesse.
- Como usuário, quero adicionar um conteúdo à minha lista para lembrar de assistir depois.
- Como usuário, quero remover itens da minha lista para mantê-la organizada.

## 6. Critérios de aceitação

- A Home deve carregar filmes e séries da API do TMDB.
- A busca deve consultar a API pelo texto digitado.
- Resultados sem correspondência devem apresentar mensagem adequada.
- A página de detalhes deve usar rota dinâmica e exibir título, imagem, descrição, avaliação e gêneros.
- O usuário deve conseguir adicionar um conteúdo à lista sem duplicá-lo.
- O usuário deve conseguir remover conteúdos da lista.
- A aplicação deve ter estados de loading e erro.
- A interface deve ser responsiva.

## 7. Estados da aplicação

- Loading
- Sucesso
- Erro
- Busca sem resultados
- Lista vazia
- Lista com conteúdos

## 8. Regras do produto

1. Somente conteúdos retornados pela API são exibidos.
2. Cada conteúdo utiliza seu ID do TMDB.
3. Um mesmo item não pode ser duplicado na lista.
4. A página de detalhes utiliza rota dinâmica.
5. Falhas de API apresentam feedback ao usuário.
6. A lista é mantida em estado React durante a sessão.

## 9. Funcionalidades do MVP

- Home
- Filmes populares
- Séries populares
- Busca
- Página de detalhes
- Minha Lista
- Adicionar e remover da lista
- Consumo da API TMDB
- Navegação com React Router

## 10. Fora do escopo

- Login
- Banco de dados
- Comentários
- Seguidores
- Chat
- Notificações
- Recomendações por IA
