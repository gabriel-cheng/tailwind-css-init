# INICIANDO TAILWIND CSS

## Adicionando projeto

• `yarn add -D tailwindcss` <br>
• `npx tailwindcss init`

## Criar arquivo input.css e colocar:

• `@tailwind base;`<br>
• `@tailwind components;`<br>
• `@tailwind utilities;`

## Rodar o comando para buildar:

• `npx tailwindcss -i caminho_do_arquivo_.css -o ./dist/output.css --watch`

## OBS

Caso mude o nome do arquivo `input.css`, precisa buildar novamente.