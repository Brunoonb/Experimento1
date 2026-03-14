# Experimento1 — Design System

Este repositório evolui os tokens para três frentes pedidas:

1. **Pacote versionado/publicável** (`@experimento1/design-tokens`).
2. **Tokens semânticos por tema** (light/dark).
3. **Componentes base** (Button, Input, Card) consumindo tokens semânticos.

## Estrutura

- `tokens/core/`: tokens globais (cor, tipografia, dimensão, spacing, raio).
- `tokens/semantic/light/`: mapeamento semântico para tema claro.
- `tokens/semantic/dark/`: mapeamento semântico para tema escuro.
- `style-dictionary.config.cjs`: build automatizado dos tokens.
- `styles/design-tokens.css`: variáveis base para uso imediato.
- `styles/semantic-themes.css`: aliases semânticos light/dark para uso imediato.
- `src/components/base-components.css`: componentes base conectados aos tokens.
- `demo/index.html`: exemplo de uso com alternância de tema.

## Publicação do pacote versionado

O `package.json` já está preparado para publicação com nome e versão:

- Nome: `@experimento1/design-tokens`
- Versão: `0.2.0`
- Exporta:
  - `@experimento1/design-tokens/css/light`
  - `@experimento1/design-tokens/css/dark`
  - `@experimento1/design-tokens/json/light`

Fluxo recomendado:

```bash
npm install
npm run tokens:build
npm publish --access public
```

> Se for um registry privado, troque a configuração de publish conforme seu ambiente.

## Build de tokens

```bash
npm run tokens:build
```

Saídas esperadas:

- `build/css/tokens-light.css`
- `build/css/tokens-dark.css`
- `build/js/tokens-light.json`

## Componentes base

Componentes iniciais em `src/components/base-components.css`:

- `.ds-button`
- `.ds-input`
- `.ds-card`

Eles consomem tokens semânticos (`--ds-color-*`, `--ds-semantic-component-*`) e mudam automaticamente com `data-theme="light|dark"`.

## Demo local

```bash
python3 -m http.server 4173
# abrir http://localhost:4173/demo/
```


## Componentes incluídos

- Input
- Select
- Switch
- Radio button
- Tag
- Checkbox
- Chip
- Combobox
- Menu item
- Progress bar
- Search
- Dropdown
