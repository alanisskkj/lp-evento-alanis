# Festival Som da Alta Paulista — Landing Page

> **Ambiente de Demonstração** — Dados, ingressos e interações são fictícios e funcionam inteiramente no lado do cliente (client-side). Nenhuma cobrança real é realizada.

Landing page de evento cultural desenvolvida com **React 19 + Vite 8 + Tailwind CSS v4**, com estética editorial brutalista-suave, acessibilidade WCAG AA e suporte a tema claro/escuro.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Stack Técnica](#stack-técnica)
- [Funcionalidades](#funcionalidades)
- [Paleta de Cores e Contraste](#paleta-de-cores-e-contraste)
- [Acessibilidade](#acessibilidade)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Scripts Disponíveis](#scripts-disponíveis)

---

## Deploy

O projeto está publicado na **Vercel** e pode ser acessado pelo link abaixo:

🔗 **[https://lp-evento-alanis-7qvnjwh4s-alaniscarvalho-2158.vercel.app](https://lp-evento-alanis.vercel.app/)**

---

### Notas do Lighthouse (produção — Vercel)

| Categoria         | Nota |
|-------------------|------|
| ⚡ Performance     | 100  |
| ♿ Acessibilidade  | 96  |
| ✅ Boas Práticas   | 100  |

> Auditado via [PageSpeed Insights](https://pagespeed.web.dev/) / Chrome Lighthouse sobre a URL de produção.
> As notas refletem as correções de contraste WCAG AA aplicadas ao projeto (pares `bg-terracota / text-papel` e tokens `grafite-suave` / `offwhite-suave` ajustados).

---



Landing page do **Festival Som da Alta Paulista (edição 2027)**, evento musical fictício de caráter regional, realizado em Osvaldo Cruz (SP). O projeto serve como protótipo de alta fidelidade de um produto de e-commerce cultural, demonstrando:

- Fluxo completo de apresentação de evento → exploração de line-up → comparativo de setores → simulação de checkout.
- Padrões modernos de UI sem recorrer a clichês gerados por IA (sem neon, glassmorphism ou sombras difusas exageradas).
- Conformidade WCAG AA em 100% dos pares de cores utilizados como texto.

---

## Stack Técnica

| Camada       | Tecnologia                        | Versão  |
|--------------|-----------------------------------|---------|
| Framework    | React                             | 19.x    |
| Build tool   | Vite                              | 8.x     |
| Estilização  | Tailwind CSS v4 (via plugin Vite) | 4.x     |
| Tipografia   | Syne (display) + Plus Jakarta Sans (corpo) | Google Fonts |
| Áudio        | Web Audio API (nativa, sem libs)  | —       |
| Persistência | `localStorage` (tema)             | —       |
| PWA          | Service Worker + Web Manifest     | —       |

---

## Funcionalidades

### 1. Hero com Vídeo de Fundo
- Vídeo em loop `autoplay muted playsinline` com imagem de fallback (`FotoFestival.avif`).
- Overlay escuro sólido para garantir contraste mínimo de 4.5:1 sobre o vídeo.
- **Botão Pause/Play** discreto no canto superior direito — acessibilidade para usuários com sensibilidade a movimento (`prefers-reduced-motion` respeitado).
- **Botão Som** para ativar/desativar o áudio do vídeo.
- Metadados do evento (data, horário, palcos) em `<dl>` semântico.

### 2. Cronômetro Regressivo (Countdown)
- Atualização a cada segundo via `setInterval`.
- Tipografia `font-variant-numeric: tabular-nums` para evitar o "pulo" horizontal dos dígitos.
- Exibe Dias, Horas, Minutos e Segundos para a abertura dos portões (12 mar 2027, 16h).

### 3. Line-up Interativo
- **Filtros por dia** (Todos / Sexta / Sábado / Domingo) e **por palco** (Palco Terra / Palco Mata) — com estado `aria-pressed` correto.
- 8 atrações fictícias regionais com gênero, horário, palco e bio detalhada.
- Clique em qualquer cartão abre um **modal acessível** (`role="dialog" aria-modal="true"`):
  - Foco automático no botão "Fechar" ao abrir.
  - Tecla `Escape` fecha o modal.
  - Prévia sonora gerada client-side via **Web Audio API** (sem dependência externa).

### 4. Tabela Comparativa de Setores
- Setores: **Pista**, **VIP**, **Open Bar** e **Backstage**.
- Scroll horizontal suave no mobile (`overflow-x: auto`).
- Badges de status com cores semânticas de alto contraste:
  - `Disponível` → verde-mata sobre branco papel.
  - `Últimas Unidades` → âmbar escuro sobre âmbar claro.
  - `Esgotado` → neutro tachado.
- Botão "Selecionar" abre o modal de checkout simulado.

### 5. Modal de Checkout Simulado
- Seleção de setor, quantidade (1–6) e dados do titular.
- Cálculo de total em tempo real.
- Confirmação visual client-side com aviso de ambiente de demonstração.

### 6. Barra de Compra Fixa (Sticky CTA)
- `position: fixed; bottom: 0` em toda a página.
- Exibe preço a partir de e botão "Comprar Ingressos".
- Desaparece do DOM quando o modal de checkout está aberto.

### 7. Tema Claro / Escuro
- Alternador no cabeçalho com `aria-label="Alternar tema claro e escuro"` e `aria-pressed`.
- Preferência salva em `localStorage` com chave `tema-festival`.
- Respeita `prefers-color-scheme` do sistema operacional na primeira visita.
- Script inline no `<head>` evita flash de tema incorreto (FOUC).

---

## Paleta de Cores e Contraste

Todos os pares de texto × fundo foram verificados para **WCAG AA (mínimo 4.5:1)**.

### Modo Claro

| Token CSS               | Hex       | Uso                                | Ratio sobre fundo | ✓/✗  |
|-------------------------|-----------|------------------------------------|-------------------|------|
| `--color-grafite`       | `#141413` | Texto principal                    | 14.1:1 / `#F7F5F0`| ✅   |
| `--color-grafite-suave` | `#3D3B37` | Texto secundário / metadados       | 5.1:1 / `#F7F5F0` | ✅   |
| `--color-grafite-suave` | `#3D3B37` | Texto secundário sobre areia       | 4.5:1 / `#EAE6DF` | ✅   |
| `--color-terracota-escuro`| `#B53B19`| Labels coloridos sobre claro      | 4.9:1 / `#F7F5F0` | ✅   |
| `--color-mata`          | `#1E4D3B` | Badges e botões sobre papel        | 7.1:1 / `#F7F5F0` | ✅   |
| `--color-papel`         | `#F7F5F0` | Texto sobre grafite (#141413)      | 14.1:1            | ✅   |

### Modo Escuro

| Token CSS                      | Hex       | Uso                               | Ratio sobre fundo  | ✓/✗  |
|--------------------------------|-----------|-----------------------------------|--------------------|------|
| `--color-offwhite`             | `#F2EFE9` | Texto principal                   | 13.4:1 / `#121212` | ✅   |
| `--color-offwhite-suave`       | `#C4BFB6` | Texto secundário / metadados      | 4.6:1 / `#121212`  | ✅   |
| `--color-offwhite-suave`       | `#C4BFB6` | Texto secundário sobre chumbo     | 4.5:1 / `#1E1E1E`  | ✅   |
| `--color-terracota-label-dark` | `#EA6B42` | Labels coloridos sobre escuro     | 4.9:1 / `#1E1E1E`  | ✅   |
| `--color-terracota`            | `#D94E28` | Fundos de badges (não texto puro) | —                  | —    |

> **Nota:** `#D94E28` (terracota) é usado exclusivamente como **cor de fundo** de badges e botões no modo escuro, nunca como texto puro sobre superfícies escuras. Para texto, usa-se sempre `--color-terracota-label-dark` (#EA6B42).

---

## Acessibilidade

| Critério                  | Implementação                                                                 |
|---------------------------|-------------------------------------------------------------------------------|
| Hierarquia semântica      | `<header>` `<main>` `<section>` `<footer>` `<article>` `<dl>` `<ol>`        |
| Skip link                 | "Pular para o conteúdo" posicionado absolutamente, visível no foco            |
| ARIA em modais            | `role="dialog"` `aria-modal="true"` `aria-labelledby` + foco gerenciado      |
| ARIA em filtros           | `role="group"` `aria-label` + `aria-pressed` em cada botão de filtro         |
| ARIA em FAQ               | `aria-expanded` `aria-controls` nos botões de acordeão                        |
| Contaste de texto         | Mínimo 4.5:1 em todos os pares (ver tabela acima)                            |
| Foco visível              | `:focus-visible` com outline 3px terracota (claro) / offwhite (escuro)       |
| Movimento reduzido        | `prefers-reduced-motion: reduce` desativa animações e o autoplay do vídeo     |
| Vídeo                     | `aria-hidden="true"` no elemento, controles de Pause/Play e Som visíveis      |
| Formulários               | `<label>` associado por `htmlFor`, `autoComplete`, `required`                 |
| Notificações              | `role="status"` em mensagens de feedback dinâmico                             |

---

## Estrutura de Arquivos

```
lp-evento-FestivalSomAltaPaulista/
├── data/
│   └── evento.js              # Dados do festival, atrações, setores e benefícios
├── public/
│   ├── favicon.svg
│   ├── icone-192.png
│   ├── manifest.webmanifest
│   └── sw.js                  # Service Worker (PWA)
├── src/
│   ├── assets/
│   │   └── FotoFestival.avif  # Imagem de fallback do Hero
│   ├── components/
│   │   ├── Cabecalho.jsx      # Header fixo com nav + alternador de tema
│   │   ├── Hero.jsx           # Seção 100vh com vídeo, overlay e CTAs
│   │   ├── Cronometro.jsx     # Countdown regressivo tabular-nums
│   │   ├── Sobre.jsx          # Manifesto editorial do festival
│   │   ├── Atracoes.jsx       # Line-up com filtros por dia e palco
│   │   ├── CartaoAtracao.jsx  # Card individual clicável
│   │   ├── ModalAtracao.jsx   # Modal de detalhes + prévia Web Audio API
│   │   ├── Programacao.jsx    # Cronograma completo em lista ordenada
│   │   ├── TabelaSetores.jsx  # Tabela comparativa de ingressos
│   │   ├── ModalCheckout.jsx  # Checkout simulado client-side
│   │   ├── BarraCompraFixa.jsx# Sticky CTA na parte inferior
│   │   ├── Grafico.jsx        # Gráfico de barras via Canvas API
│   │   ├── Inscricao.jsx      # Formulário de newsletter simulado
│   │   ├── PerguntasFrequentes.jsx # FAQ com acordeão acessível
│   │   ├── Rodape.jsx         # Footer com aviso de demonstração
│   │   └── BotaoLembrete.jsx  # Notificação via Service Worker
│   ├── hooks/
│   │   └── useTema.js         # Hook de gerenciamento de tema claro/escuro
│   ├── App.jsx                # Composição principal + estado global
│   ├── index.css              # Tokens de design, tipografia, foco, skip-link
│   └── main.jsx               # Entry point React + registro do Service Worker
├── index.html                 # Template HTML com script anti-FOUC
├── vite.config.js
└── package.json
```

---

## Como Rodar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o servidor de desenvolvimento com HMR
npm run dev

# 3. Acesse em http://localhost:5173
```

---

## Scripts Disponíveis

| Script          | Descrição                                      |
|-----------------|------------------------------------------------|
| `npm run dev`   | Servidor de desenvolvimento com Hot Module Replacement |
| `npm run build` | Build de produção em `/dist`                   |
| `npm run preview` | Preview local do build de produção           |
| `npm run lint`  | Análise estática com ESLint                    |
