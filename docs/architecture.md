# CineTrack — Architecture

## Visão geral

Aplicação React criada com Vite, organizada em páginas, layout, componentes reutilizáveis e serviço de API.

## Rotas

| Rota | Página | Função |
|---|---|---|
| `/` | Home | Filmes e séries populares |
| `/buscar` | Search | Pesquisa de conteúdos |
| `/movie/:id` | Details | Detalhes de filme |
| `/tv/:id` | Details | Detalhes de série |
| `/minha-lista` | MyList | Lista pessoal |

## Layout

`MainLayout` mantém o `Header`, o `Outlet` do React Router e o rodapé compartilhados entre as páginas.

## Componentes

### Header
Navegação entre Início, Buscar e Minha Lista.

### MovieCard
Recebe props `id`, `title`, `poster`, `rating` e `type`. É reutilizado na Home, Busca e Minha Lista.

### Loading
Indica carregamento de dados da API.

## Estados React

### App
- `watchlist`: lista de conteúdos salvos.

### Home
- `movies`
- `series`
- `loading`
- `error`

### Search
- `search`
- `results`
- `loading`
- `error`
- `searched`

### Details
- `content`
- `loading`
- `error`

## Props

- `MovieCard`: id, title, poster, rating, type
- `Details`: addToList, watchlist
- `MyList`: watchlist, removeFromList

## useEffect

- Home: busca filmes e séries populares ao carregar.
- Details: busca detalhes novamente quando o ID ou o tipo muda.

## API

O arquivo `src/services/tmdb.js` concentra a URL base, URLs de imagens e a função de requisição autenticada com `VITE_TMDB_TOKEN`.

Endpoints principais:

- `/movie/popular`
- `/tv/popular`
- `/search/multi`
- `/movie/:id`
- `/tv/:id`
