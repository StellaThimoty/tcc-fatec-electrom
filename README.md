# tcc-fatec-electron

Aplicação electron referente ao front-end, disponível publicamente. Toda configuração já foi pré feita e as coisas a serem trabalhadas vide electron devem ser feitas pelo `src/renderer` pois este aplicativo é apenas um front.

As tecnologias utilizadas são:
  - Electron (Node + Chromium)
  - Vite + Typescript
  - React
  - TailwindCSS + Shadcn/ui

## Instalação

Extremamente simples, clone o respositório (git clone url, gh clone url, download do zip, etc...) e 
```bash
$ pnpm install
```

## Desenvolvimento
Para rodar o aplicativo em desenvolvimento use este comando
```bash
$ pnpm dev
```

## Build
Para 'buildar' o aplicativo para cada plataforma nativa, use este comando
```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```
