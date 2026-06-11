<div align="center">

<img src="https://boxboydelivery.com/assets/boxboy-logo.png" alt="BoxBoy" width="96" />

# BoxBoy — Site Institucional

### Performance logística _last-mile_ para o crescimento do seu negócio.

Plataforma que conecta **lojistas** e **entregadores** com despacho automático,
monitoramento em tempo real e as melhores taxas do Rio de Janeiro.

<br/>

[![Live](https://img.shields.io/badge/Acessar_site-boxboydelivery.com-FF914D?style=for-the-badge&logoColor=white)](https://boxboydelivery.com/)
[![Status](https://img.shields.io/badge/status-produção-22c55e?style=for-the-badge)](https://boxboydelivery.com/)
[![Região](https://img.shields.io/badge/operação-Rio_de_Janeiro-FFBD59?style=for-the-badge)](https://boxboydelivery.com/)

<br/>

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)

</div>

---

## 📑 Sumário

- [Sobre a BoxBoy](#-sobre-a-boxboy)
- [Sobre o projeto](#-sobre-o-projeto)
- [Stack tecnológica](#-stack-tecnológica)
- [Arquitetura & estrutura de pastas](#-arquitetura--estrutura-de-pastas)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Como rodar localmente](#-como-rodar-localmente)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)
- [Padrões de código](#-padrões-de-código)
- [Autoria](#-autoria)

---

## 🏢 Sobre a BoxBoy

A **BoxBoy Delivery LTDA** é uma operação de logística _last-mile_ que conecta
lojistas e entregadores para entregas _instant_, _same-day_ e _next-day_ em toda
a cidade do **Rio de Janeiro**. A plataforma substitui planilhas, grupos de
WhatsApp e operadores improvisados por uma única parceria com despacho
automático, rotas inteligentes e financeiro integrado.

| Métrica | Valor |
| ------- | ----- |
| 🏪 Lojas ativas | **+40 marcas conectadas** |
| 📦 Volume | **+40 mil pedidos / mês** |
| 🛟 Suporte | **7 dias por semana** |
| 📍 Cobertura | **Rio de Janeiro · RJ** |

> Parceiros que já operam com a BoxBoy: China in Box, La Mole, Domino's,
> Clube Verde, Los Guacamoles, Spoleto e Koni.

---

## 🎯 Sobre o projeto

Este repositório contém o **site institucional e comercial** da BoxBoy — a porta
de entrada digital da marca. Ele cumpre três papéis:

1. **Captação comercial** — apresenta a plataforma, a tabela de preços e um
   formulário de leads que dispara e-mails transacionais (notificação interna +
   confirmação para o lead) via **Resend**.
2. **Vitrine de produto** — _landing page_ com visualizações de dados animadas
   (despacho, monitoramento, rotas) construídas com SVG sob medida.
3. **Central institucional** — páginas de Privacidade, Cookies, Termos de Uso e
   contato Jurídico, em conformidade com a **LGPD**.

O projeto é multilíngue por design, com catálogos de mensagens em
**Português, Inglês, Espanhol e Francês**.

---

## 🧱 Stack tecnológica

### Core

| Tecnologia | Versão | Por que está aqui |
| ---------- | ------ | ----------------- |
| **[Next.js](https://nextjs.org/)** | 16 (App Router) | Framework full-stack React com Server Components, rotas de API e otimizações de _build_. |
| **[React](https://react.dev/)** | 19 | Biblioteca de UI. O **React Compiler** está habilitado (`reactCompiler: true`) para memoização automática. |
| **[TypeScript](https://www.typescriptlang.org/)** | 5 | Tipagem estática em modo `strict`, com alias `@/*` apontando para `src/*`. |

### Estilização & UI

| Tecnologia | Função |
| ---------- | ------ |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Estilização _utility-first_ com configuração _CSS-first_ (`@theme inline`) e _design tokens_ próprios da BoxBoy (`ink`, `paper`, paleta `amber`). |
| **[shadcn/ui](https://ui.shadcn.com/)** | Base de componentes (`components.json`, estilo `radix-mira`). |
| **[Hugeicons](https://hugeicons.com/)** | Biblioteca de ícones (`@hugeicons/react`). |
| **CVA · clsx · tailwind-merge · tailwind-variants** | Composição de classes e variantes de componentes sem conflito. |
| **next/font** | Fontes **Inter** (sans), **Space Grotesk** (display) e **JetBrains Mono** (mono). |

### Back-end & integrações

| Tecnologia | Função |
| ---------- | ------ |
| **[Resend](https://resend.com/) + [React Email](https://react.email/)** | Envio de e-mails transacionais a partir do _route handler_ `POST /api/lead`, com _templates_ escritos em React. |
| **[Vercel Analytics](https://vercel.com/analytics) + Speed Insights** | Métricas de tráfego e _Core Web Vitals_ em produção. |
| **Meta Pixel** | Rastreamento de conversões (opcional, ativado por variável de ambiente). |

### Qualidade & tooling

| Ferramenta | Função |
| ---------- | ------ |
| **ESLint 9** | _Linting_ com `eslint-config-next` (Core Web Vitals + TypeScript). |
| **Prettier 3** | Formatação, com `prettier-plugin-tailwindcss` para ordenar classes. |
| **pnpm** | Gerenciador de pacotes (rápido e eficiente em disco). |

---

## 🗂 Arquitetura & estrutura de pastas

O projeto adota uma organização **modular por domínio** sob `src/modules`,
separando a _landing page_ (`common`) das páginas institucionais
(`institutional`).

```
src/
├── app/                          # App Router (Next.js)
│   ├── (common)/                 # Grupo de rotas → landing page "/"
│   ├── (institutional)/          # Grupo de rotas → "/institucional"
│   ├── api/lead/route.ts         # POST /api/lead → envio de e-mails (Resend)
│   └── layout.tsx                # Metadata, SEO, fontes, Analytics, Meta Pixel
│
├── modules/
│   ├── common/                   # Landing page
│   │   ├── components/           # Header, Hero, Features, Pricing, LeadForm…
│   │   ├── feature-viz/          # Visualizações de dados em SVG (recursos)
│   │   ├── benefits-viz/         # Visualizações de dados em SVG (benefícios)
│   │   ├── emails/               # Templates React Email (lead + agradecimento)
│   │   ├── data/                 # Dados estáticos (features, parceiros)
│   │   ├── hooks/                # useReveal, useScrolled
│   │   └── icons/                # Logos de parceiros e ícones de marca
│   │
│   └── institutional/            # Privacidade, Cookies, Termos, Jurídico (LGPD)
│
├── shared/messages/              # i18n → pt · en · es · fr
├── styles/globals.css            # Tailwind v4 + design tokens da BoxBoy
└── utils/                        # cn(), fonts
```

---

## ✨ Funcionalidades

- ⚡ **Landing page** com seções de Hero, Parceiros, Recursos, Showcase, Preços, Lead e Benefícios.
- 📊 **Data-viz animada** — gráficos, rotas e radares desenhados em SVG sob medida.
- 📨 **Formulário de leads** com máscara de telefone, validação e _double e-mail_ (notificação + agradecimento) via Resend.
- 🔐 **Central institucional** com Privacidade, Cookies, Termos e Jurídico — conforme a LGPD.
- 🌍 **Multilíngue** — catálogos em PT, EN, ES e FR.
- 🎨 **Design system próprio** com tokens de cor, sombras e tipografia da marca.
- 📈 **SEO & Social** — _metadata_ completa, Open Graph e Twitter Cards.
- 📡 **Analytics** — Vercel Analytics, Speed Insights e Meta Pixel (opcional).

---

## ✅ Pré-requisitos

- **[Node.js](https://nodejs.org/)** `>= 18.18` (recomendado: 20 LTS)
- **[pnpm](https://pnpm.io/)** `>= 9` — instale com `npm install -g pnpm`
- Uma conta na **[Resend](https://resend.com/)** para a API de e-mails (opcional em desenvolvimento)

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/BoxBoyDelivery/siteprincipal.git
cd siteprincipal

# 2. Instale as dependências
pnpm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# edite .env.local com suas chaves (veja a seção abaixo)

# 4. Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no navegador. 🎉

> 💡 O formulário de leads só envia e-mails de verdade com uma `RESEND_API_KEY`
> válida. O restante do site funciona normalmente sem ela.

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env.local` na raiz com base no `.env.example`:

| Variável | Obrigatória | Descrição |
| -------- | :---------: | --------- |
| `NEXT_PUBLIC_BASE_URL` | Recomendada | URL base do site (usada em SEO / Open Graph). Padrão: `https://boxboydelivery.com`. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Opcional | ID do Meta Pixel. Se ausente, o Pixel não é carregado. |
| `RESEND_API_KEY` | Sim (p/ e-mails) | Chave da API Resend para o formulário de leads. |
| `EMAIL_FROM` | Opcional | Remetente dos e-mails. Padrão: `BoxBoy <contato@boxboydelivery.com>`. |
| `CONTACT_EMAIL` | Opcional | Destino interno dos leads. Padrão: `contato@boxboydelivery.com`. |

---

## 📜 Scripts disponíveis

| Comando | Descrição |
| ------- | --------- |
| `pnpm dev` | Inicia o servidor de desenvolvimento (`localhost:3000`). |
| `pnpm build` | Gera o _build_ de produção. |
| `pnpm start` | Sobe o servidor de produção (após o `build`). |
| `pnpm lint` | Executa o ESLint em todo o projeto. |

---

## ☁️ Deploy

O projeto é otimizado para a **[Vercel](https://vercel.com/)** (criadora do Next.js):

1. Importe o repositório na Vercel.
2. Configure as variáveis de ambiente no painel do projeto.
3. O _deploy_ é automático a cada `push` na branch `main`.

Qualquer plataforma com suporte a Next.js 16 também funciona (`pnpm build && pnpm start`).

---

## 🧹 Padrões de código

- **TypeScript `strict`** — sem `any` implícito; alias de import `@/`.
- **Prettier** — aspas simples, sem ponto-e-vírgula, `printWidth: 100`, classes Tailwind ordenadas automaticamente.
- **ESLint** — regras de Core Web Vitals + TypeScript da Next.js.
- **Commits** — _Conventional Commits_ (`feat:`, `fix:`, `refactor:`…).

---

## 👤 Autoria

<div align="center">

Desenvolvido com 🧡 por **João Batista**

[![GitHub](https://img.shields.io/badge/GitHub-cardosofiles-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Cardosofiles)
[![E-mail](https://img.shields.io/badge/E--mail-cardosofiles@gmail.com-FF914D?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contato@cardosofiles.com.br)

<sub>Projeto desenvolvido para a <strong>BoxBoy Delivery LTDA</strong> · Rio de Janeiro · RJ</sub>

</div>
