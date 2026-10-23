# Regras de front-end — Koala Supermercados

- HTML semântico; um único `<h1>` por página.
- Cores, espaços e raios só via `var(--...)` de `tokens.css`.
- Nunca cor hexadecimal fora de `tokens.css`.
- Reuse `.botao`, `.card` e `.campo`; não crie variações.
- Sem bibliotecas novas sem pedir.
- Teste em 360px, 768px e 1280px.

## Proibições explícitas
- Não usar `style="color: #..."` nem `background: #...` em HTML, JS ou outros CSS.
- Não usar valores soltos de `border-radius`; use `var(--raio)`.
- Não usar emoji como ícone nem ilustração infantil; imagens de produto são fotos reais em `img/fotos/` (créditos em `img/fotos/CREDITOS.md`).
- Não copiar logo, marca ou foto do Guanabara; a referência é só de layout.
- Não validar componente em página de produção: use `catalogo.html`.

## Marca e geometria
- A marca é **Koala** (com K). Logo em `img/logo.svg`.
- Geometria própria: raio quase reto (2px), escala de espaço 4px, escala tipográfica 1.25.
- Tema claro e escuro: trocar só variáveis em `tokens.css` (`[data-tema="escuro"]`).

## Estrutura
- `tokens.css` (raiz): fonte única de design.
- `css/estilos.css`: componentes e layout.
- `js/data.js`: categorias, produtos, dicas, modelos de lista.
- `js/app.js`: tema, lista de compras (localStorage), cabeçalho e rodapé.
- `catalogo.html`: todos os componentes em todos os estados.
