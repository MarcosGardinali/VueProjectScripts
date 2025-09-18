# Vue Project Scripts

Vue Project Scripts é uma biblioteca CLI desenvolvida para **auxiliar o desenvolvimento Front-End** Vue. Ela centraliza scripts que automatizam tarefas comuns, como criação de módulos, estrutura de pastas e arquivos de tradução.

---
## Instalação
Para instalar a biblioteca em modo de desenvolvimento execute o seguinte comando em seu projeto:

```sh
npm install --save-dev https://github.com/MarcosGardinali/VueProjectScripts
```

---
## Comandos disponíveis

### `create-module`

Cria a estrutura básica de um módulo no projeto, incluindo:

- Pastas e arquivos em `src/views/modules`
- Pastas em `src/components/modules`
- Arquivos de tradução em `src/lang/language/{pt-br,en-us,es-es,fr-fr}/modules`

Durante a execução, o CLI faz perguntas interativas para decidir quais partes criar.

**Exemplo de uso:**
```sh
npx vueprojectscripts create-module
```

### `create-component`

Cria um componente no caminho inserido pelo usuário:

- Cria os arquivos `vue` e `scss`
- Caso o usuário queira, cria os arquivos em uma pasta com o nome do componente

Durante a execução, o CLI faz perguntas interativas para a criação do componente.

**Exemplo de uso:**
```sh
npx vueprojectscripts create-component
```
