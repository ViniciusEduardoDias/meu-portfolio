![Meu Projeto](projects/meu-portfolio.jpg) ✅ CERTO

# 🌐 Meu Portfólio Pessoal

Este é o meu portfólio pessoal desenvolvido com **Next.js**, exibindo meus principais projetos e qualificações diretamente da **API do GitHub**, com imagens customizadas e um formulário de contato integrado via **EmailJS**.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [GitHub REST API](https://docs.github.com/en/rest)

## 📸 Funcionalidades

- Página inicial com introdução e links sociais
- Seção de projetos dinâmicos puxados do GitHub
- Imagens personalizadas para cada projeto (baseadas no nome do repositório)
- Formulário de contato com envio direto por email (via EmailJS)
- Design responsivo e moderno

## 🧠 Como funciona a listagem de projetos?

A aplicação faz uma chamada à API do GitHub para buscar todos os repositórios públicos do usuário, filtra os principais e exibe-os em cards com:

- Nome do projeto
- Descrição
- Link para o repositório
- Imagem correspondente (nome da imagem deve ser igual ao nome do repositório)

As imagens ficam na pasta:

`public/projects/NOME_DO_REPOSITORIO.jpg`

## 📬 Formulário de Contato

O formulário utiliza o **EmailJS** para envio direto de mensagens para o seu email. Basta configurar as credenciais:

- `service_id`
- `template_id`
- `public_key`

Você pode configurar isso no [EmailJS Dashboard](https://dashboard.emailjs.com/).

## 🧑‍💻 Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse em: http://localhost:3000


## 📦 Deploy

O projeto está hospedado na Vercel e pode ser acessado por:
➡️ https://meu-portfolio-blond-zeta.vercel.app/



Projeto feito por Vinícius Dias
```
