# Guia Visual e Inventário de Cores: José Mário

Diretriz de identidade visual aplicada na landing page oficial da consultoria de José Mário.
Estilo visual: Dark Luxury Fitness e Autoridade de Alta Performance.

---

## Processo Padrão: Substituição de Cores em Lote

Sempre que houver alteração de paleta ou migração de template:
1. Consultar a tabela de inventário abaixo para obter o código exato de cada tom.
2. Definir a coluna De/Para com o mapeamento completo (hex, rgb e rgba com seus respectivos canais de transparência).
3. Executar script de substituição em lote no documento inteiro, evitando edições manuais linha por linha.
4. Rodar script de verificação sintática para garantir zero valores residuais e zero funções rgba mal formatadas.

---

## Tabela de Inventário de Cores e Mapeamento De/Para

| Elemento / Função | Cor Original (Pacholok / Laranja) | Nova Cor Oficial (José Mário / Azul e Preto) | Código CSS Aplicado |
| :--- | :--- | :--- | :--- |
| Destaque Primário / Botões | `#ff6a00` (Laranja vivo) | `#0066ff` (Azul Royal Elétrico) | `var(--accent-blue)` / `#0066ff` |
| Destaque Secundário / Tags | `#ff5500` (Laranja escuro) | `#0044cc` (Azul Profundo) | `#0044cc` |
| Gradientes e Acentos Claros | `#f59e0b` / `#fbbf24` (Dourado/Âmbar) | `#38bdf8` (Ciano Celeste) | `var(--accent-blue-light)` / `#38bdf8` |
| Glow Radial do Hero (atrás da foto) | `rgba(255, 106, 0, 0.18)` | `rgba(0, 102, 255, 0.25)` | `radial-gradient(circle, rgba(0, 102, 255, 0.25) 0%, rgba(8, 8, 10, 0) 70%)` |
| Ícones de Destaque no Hero | `rgba(255, 106, 0, 0.18)` | `rgba(0, 102, 255, 0.18)` | `.highlight-icon` |
| Ícones de Credenciais do Treinador | `rgba(255, 106, 0, 0.1)` | `rgba(0, 102, 255, 0.15)` | `.cred-icon-wrap` |
| Ícones das Etapas do Método | `rgba(255, 106, 0, 0.1)` | `rgba(0, 102, 255, 0.15)` | `.step-icon-wrap` |
| Ícones de Entregáveis (Incluso) | `rgba(255, 106, 0, 0.08)` | `rgba(0, 102, 255, 0.15)` | `.inc-icon-wrap` |
| Hover nos Cards de Provas Sociais | `rgba(255, 106, 0, 0.35)` | `rgba(0, 102, 255, 0.55)` | `.result-card:hover` (borda e sombra azulada) |
| Hover nos Cards de Etapas | `rgba(255, 106, 0, 0.3)` | `rgba(0, 102, 255, 0.5)` | `.step-card:hover` |
| Hover nos Cards O Que Está Incluso | `rgba(255, 106, 0, 0.3)` | `rgba(0, 102, 255, 0.5)` | `.included-card:hover` |
| Borda do Menu Mobile Aberto | `rgba(255, 106, 0, 0.3)` | `rgba(0, 102, 255, 0.35)` | `script.js` |
| Foco do FAQ Accordion | `rgba(255, 106, 0, 0.35)` | `rgba(0, 102, 255, 0.5)` | `.faq-item.active` |
| Card em Destaque nos Planos | `#ff6a00` | `#0066ff` | `.pricing-card.featured-plan` |

---

## Paleta Base de Tons Escuros

| Token | Código HEX / RGBA | Finalidade |
| :--- | :--- | :--- |
| `--bg-dark` | `#070709` | Fundo principal da página |
| `--bg-surface` | `#0e0e13` | Superfície de cartões destacados e moldura da foto |
| `--bg-card` | `rgba(16, 17, 23, 0.88)` | Cartões de resultados e etapas |
| Alternância de Seções | `#08080a`, `#09090c`, `#0c0c10`, `#0d0d12` | Ritmo visual sutil entre blocos |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Bordas discretas |
| `--border-card` | `rgba(255, 255, 255, 0.12)` | Delimitação de cards |

---

## Tipografia Aplicada

- **Títulos (h1, h2, h3):** Grindela (arquivo local `assets/fonts/Grindela.ttf`).
- **Textos Corridos e Legendas:** Plus Jakarta Sans (Google Fonts, pesos 400 a 700).
