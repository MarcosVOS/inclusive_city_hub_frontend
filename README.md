# 🚀 Cidade Inclusiva

Bem-vindo ao repositório do projeto **Cidade Inclusiva**! Este é um guia completo para que qualquer pessoa possa entender, rodar e contribuir com o projeto.

---

## 📝 Sobre o Projeto

O "Cidade Inclusiva" é um projeto social acadêmico, desenvolvido para a Prefeitura de São Paulo, com o objetivo de promover a inclusão digital e social de idosos na cidade. A plataforma visa conectar a população idosa a serviços, eventos, comunidades locais e recursos digitais de forma acessível e intuitiva.

Este projeto foi construído utilizando as seguintes tecnologias:

- **[Next.js](https://nextjs.org/)**: Um framework React para construir aplicações web rápidas e modernas.
- **[React](https://react.dev/)**: Uma biblioteca JavaScript para criar interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Um superset do JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)**: Um framework de CSS para estilização rápida.

---

## 📋 Índice

- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#-executando-o-projeto)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy (Publicação)](#-deploy-publicação)
- [Aprenda Mais](#-aprenda-mais)

---

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

1.  **[Node.js](https://nodejs.org/en)**: É o ambiente que executa JavaScript fora do navegador. Ao instalar o Node.js, o `npm` (gerenciador de pacotes) é instalado junto.
2.  **[Git](https://git-scm.com/)**: Para clonar o projeto do repositório.

Você pode verificar se já os tem instalados rodando os seguintes comandos no seu terminal:

```bash
node -v
npm -v
git --version
```

---

## Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento localmente.

1.  **Clone o repositório:**
    Abra seu terminal, navegue até a pasta onde deseja salvar o projeto e execute o comando (lembre-se de trocar pela URL do seu repositório):

    ```bash
    git clone [https://github.com/MarcosVOS/inclusive_city_hub_frontend.git](https://github.com/MarcosVOS/inclusive_city_hub_frontend.git)
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd inclusive_city_hub_frontend
    ```

3.  **Instale as dependências:**
    Este comando irá baixar todas as bibliotecas e pacotes que o projeto precisa para funcionar.
    ```bash
    npm install
    ```
    _ou, se você prefere usar outro gerenciador de pacotes:_
    ```bash
    yarn install
    ```
    ```bash
    pnpm install
    ```

---

## 🚀 Executando o Projeto

Com as dependências instaladas, você já pode iniciar o servidor de desenvolvimento.

1.  **Execute o seguinte comando:**
    Este comando iniciará o servidor localmente, geralmente na porta 3000.

    ```bash
    npm run dev
    ```

    _ou, se você usa outro gerenciador:_

    ```bash
    yarn dev
    ```

    ```bash
    pnpm dev
    ```

2.  **Abra no navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto em execução. O servidor recarregará automaticamente a página sempre que você fizer uma alteração nos arquivos.

---

## 📂 Estrutura de Pastas

Entender a organização dos arquivos é fundamental. Aqui está uma visão geral da estrutura do projeto:

```
.
├── app/                  # ✅ O coração do seu projeto! Onde as páginas e rotas vivem.
│   ├── layout.tsx        # Layout principal que envolve todas as páginas.
│   └── page.tsx          # A página inicial (rota "/").
│
├── public/               # 🖼️ Arquivos estáticos (imagens, ícones, fontes, etc.).
│
├── .eslintrc.json        # Configurações do ESLint (ferramenta para padrões de código).
├── .gitignore            # Arquivos e pastas que o Git deve ignorar (ex: node_modules).
├── next.config.mjs       # Configurações avançadas do Next.js.
├── package.json          # "Identidade" do projeto: lista de scripts e dependências.
├── tsconfig.json         # Configurações do TypeScript.
└── README.md             # Este arquivo que você está lendo.
```

**Como funciona a pasta `app`?**

O Next.js usa um sistema de roteamento baseado em pastas. Para criar uma nova página (ex: `/eventos`), basta criar uma nova pasta `eventos` dentro de `app` e, dentro dela, um arquivo `page.tsx`.

- `app/eventos/page.tsx` se tornará a rota `http://localhost:3000/eventos`

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará alguns scripts úteis:

- `"dev"`: Inicia o servidor de desenvolvimento (`npm run dev`).
- `"build"`: Cria uma versão otimizada e pronta para produção do seu site (`npm run build`).
- `"start"`: Inicia um servidor com a versão de produção (requer rodar `build` antes) (`npm run start`).
- `"lint"`: Analisa o código em busca de erros e problemas de estilo (`npm run lint`).

---

## 🚀 Deploy (Publicação)

A maneira mais fácil de publicar seu site Next.js e deixá-lo acessível na internet é usando a **Vercel**, a plataforma dos criadores do Next.js.

1.  **Envie seu projeto para o GitHub, GitLab ou Bitbucket.**
2.  **Crie uma conta na [Vercel](https://vercel.com)** (você pode se registrar usando sua conta do Git).
3.  **Importe seu projeto:** No painel da Vercel, clique em "Add New..." -> "Project" e selecione seu repositório.
4.  **Deploy:** A Vercel detectará que é um projeto Next.js e configurará tudo automaticamente. Clique em "Deploy" e, em poucos minutos, seu site estará no ar!

---

## 📚 Aprenda Mais

Para aprofundar seus conhecimentos sobre as tecnologias usadas:

- [Documentação Oficial do Next.js](https://nextjs.org/docs) - O melhor lugar para aprender sobre os recursos do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Um tutorial interativo oficial e excelente para iniciantes.
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js) - Explore o código-fonte e participe da comunidade.

---

Feito com ❤️ pelos alunos da [Anhembi Morumbi/Ciência da Computação].
