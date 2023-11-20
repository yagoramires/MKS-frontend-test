# Desafio MKS Store

Este projeto é uma aplicação web desenvolvida como parte de um desafio técnico. O objetivo principal é consumir uma API REST de produtos para exibir a lista de produtos de uma loja virtual. A aplicação foi construída com foco em clareza de código e reutilização de componentes.

## Funcionalidades

A aplicação consiste em uma única página/rota que exibe a lista de produtos da loja e um carrinho de compras. Abaixo estão detalhes sobre cada parte:

### Loja

- A lista de produtos é obtida da API REST de produtos.
- Utilizei um efeito shimmer/skeleton para melhorar a experiência do usuário durante o carregamento dos dados.

### Carrinho

- O carrinho exibe todos os produtos selecionados pelo usuário.
- Adicionei a funcionalidade de aumentar a quantidade de cada produto no carrinho.

## Design e Estilo

O design da loja foi baseado no [Figma loja](https://www.figma.com/file/ay9JKCd6LKvKLE7TclJJkX/MKS-Front-end-challenge?type=design&node-id=0-1&mode=design&t=53jzmd9yCzFq0o88-0), que inclui o design system e a escolha da fonte. Utilizei Sass para a estilização dos componentes, garantindo uma aparência consistente e agradável.

## Tecnologias Utilizadas

- TypeScript
- Next.js
- React-query e axios para requisições à API
- React-redux para gerenciamento de estado
- Sass e react-icons para estilização
- Framer-motion para animações

## Deployment

A aplicação foi implantada no ambiente Vercel, garantindo acessibilidade estável para avaliação. Você pode acessar a aplicação [aqui](https://mks-frontend-test-by-yago-ramires.vercel.app/) e o código-fonte está disponível no repositório [aqui](https://github.com/yagoramires/MKS-frontend-test).

Fique à vontade para explorar a aplicação e fornecer feedback. Espero que a experiência atenda às expectativas e estou disponível para esclarecer qualquer dúvida. Obrigado pela oportunidade!
