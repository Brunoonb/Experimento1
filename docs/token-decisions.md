# Decisões de evolução do Design System

## 1) Pacote versionado dos tokens

- Pacote configurado como `@experimento1/design-tokens`.
- Versionamento inicial de publicação: `0.2.0`.
- `exports` definidos para consumo direto de CSS light/dark e JSON light.

## 2) Tokens semânticos light/dark

- Tokens globais separados em `tokens/core/`.
- Tokens semânticos de tema em:
  - `tokens/semantic/light/theme.json`
  - `tokens/semantic/dark/theme.json`
- Estratégia: componentes usam tokens semânticos; temas só remapeiam valores.

## 3) Componentes base

- Button, Input e Card iniciados em `src/components/base-components.css`.
- Todos os componentes consomem tokens semânticos para permitir troca de tema sem reescrever estilos de componente.

## 4) Pipeline

- Style Dictionary configurado para gerar:
  - `build/css/tokens-light.css`
  - `build/css/tokens-dark.css`
  - `build/js/tokens-light.json`
