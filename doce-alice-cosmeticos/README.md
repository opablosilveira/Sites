# Unifarmas

Landing page cinematográfica em React + TypeScript + Vite, com imagens oficiais da farmácia, categorias interativas, navegação mobile, FAQ, política de privacidade e contato contextual pelo WhatsApp.

## Executar
Requer Node.js 24 ou superior.

```sh
npm ci
npm start
```

Abra https://unifarmas.localhost. O Portless mantém esse endereço fixo. Para diagnosticar o proxy, use `npx portless doctor`.

## Verificar
```sh
npm run verify
npm run format:check
```

A verificação executa ESLint, TypeScript, seis testes Playwright (Chrome instalado) e build. Os testes iniciam o servidor quando necessário. Biome cuida exclusivamente da formatação. Husky verifica lint e tipos antes de commits.

## Conteúdo e edição
- `src/App.tsx`: navegação, abertura, movimento e privacidade.
- `src/CareSection.tsx`: categorias e descrições.
- `src/StorySections.tsx`: serviços, localização, FAQ e chamada final.
- `src/shared.tsx`: marca, WhatsApp e endereço do Maps.
- `src/styles.css` e `src/responsive.css`: visual e adaptação de telas.
- `public/images`: fotografias do site oficial unifarmas.com.br, consultado em 09/09/2026. A marca tipográfica da interface é uma interpretação visual; as fotos preservam a sinalização original.

Endereço confirmado pelo usuário: Av. Marciano Xavier de Oliveira, 70, Centro, Cabreúva/SP. Telefones do site atual: (11) 92106-5952 e (11) 99928-2368. Horários e disponibilidade são consultados com a equipe. Não há checkout, banco de dados ou envio de formulário. Links externos abrem os serviços correspondentes. Google Fonts fornece as fontes.

## Entrega
`npm run build` gera `dist/` para hospedagem estática. Esta entrega está rodando localmente; nenhum domínio público foi alterado. O Git local está inicializado, sem remoto. CI será configurada quando houver um provedor remoto definido.

Toolkit: ESLint, Biome, Husky, memória, manifesto e comandos reproduzíveis. Graphify está disponível globalmente; `npm run graph:update` produz índice em `src/graphify-out`, mas o parser instalado relata limitações com TSX, portanto o índice não substitui o compilador TypeScript. Sem configuração de Claude, nuvem ou credenciais.

Rollback: por ser um projeto novo isolado, nenhum site anterior foi alterado. Os arquivos gerados pelo Toolkit estão listados no manifesto; para removê-lo, retire seus scripts/dependências e arquivos listados, preservando o código da página.
