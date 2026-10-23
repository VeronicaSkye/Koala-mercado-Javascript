// Dados do catálogo. Cada produto: [id, categoria, nome, preço, preço antigo (opcional), unidade]
window.CATS = [
  { slug: "acougue", name: "Açougue", img: "img/fotos/acougue.jpg" },
  { slug: "bebidas", name: "Bebidas", img: "img/fotos/bebidas.jpg" },
  { slug: "biscoitos", name: "Biscoitos", img: "img/fotos/biscoitos.jpg" },
  { slug: "bebe", name: "Cantinho Do Bebê", img: "img/fotos/bebe.jpg" },
  { slug: "carnes-salgadas", name: "Carnes Salgadas", img: "img/fotos/carnes-salgadas.jpg" },
  { slug: "cereais", name: "Cereais E Farináceos", img: "img/fotos/cereais.jpg" },
  { slug: "chocolates", name: "Chocolates E Bombons", img: "img/fotos/chocolates.jpg" },
  { slug: "conservas", name: "Conservas", img: "img/fotos/conservas.jpg" },
  { slug: "embutidos", name: "Embutidos", img: "img/fotos/embutidos.jpg" },
  { slug: "frios", name: "Frios E Laticínios", img: "img/fotos/frios.jpg" },
  { slug: "higiene", name: "Higiene Pessoal", img: "img/fotos/higiene.jpg" },
  { slug: "limpeza", name: "Limpeza", img: "img/fotos/limpeza.jpg" },
  { slug: "massas", name: "Massas", img: "img/fotos/massas.jpg" },
  { slug: "matinais", name: "Matinais E Padaria", img: "img/fotos/matinais.jpg" },
];

const RAW = [
  ["acougue", "Bife de Alcatra", 39.9, 0, "kg"], ["acougue", "Picanha Bovina", 69.9, 79.9, "kg"],
  ["acougue", "Frango Inteiro", 11.9, 0, "kg"], ["acougue", "Linguiça Toscana", 21.9, 0, "kg"],
  ["bebidas", "Refrigerante Cola", 8.49, 0, "2 L"], ["bebidas", "Suco de Laranja", 6.99, 7.99, "1 L"],
  ["bebidas", "Água Mineral", 2.49, 0, "1,5 L"], ["bebidas", "Cerveja Pilsen", 3.99, 0, "350 ml"],
  ["biscoitos", "Biscoito Recheado", 2.99, 0, "130 g"], ["biscoitos", "Cream Cracker", 4.99, 0, "400 g"],
  ["biscoitos", "Biscoito Maisena", 4.29, 4.99, "360 g"], ["biscoitos", "Wafer de Chocolate", 2.49, 0, "100 g"],
  ["bebe", "Fralda Descartável M", 29.9, 34.9, "30 un"], ["bebe", "Lenço Umedecido", 7.99, 0, "50 un"],
  ["bebe", "Papinha de Frutas", 3.49, 0, "120 g"], ["bebe", "Fórmula Infantil", 24.9, 0, "400 g"],
  ["carnes-salgadas", "Charque Dianteiro", 34.9, 0, "kg"], ["carnes-salgadas", "Bacalhau Salgado", 49.9, 59.9, "kg"],
  ["carnes-salgadas", "Carne de Sol", 39.9, 0, "kg"], ["carnes-salgadas", "Paio", 29.9, 0, "kg"],
  ["cereais", "Arroz Branco", 27.9, 31.9, "5 kg"], ["cereais", "Feijão Carioca", 7.99, 0, "1 kg"],
  ["cereais", "Farinha de Mandioca", 6.49, 0, "1 kg"], ["cereais", "Aveia em Flocos", 3.99, 0, "200 g"],
  ["chocolates", "Chocolate ao Leite", 5.49, 0, "90 g"], ["chocolates", "Bombom Sortido", 14.9, 17.9, "300 g"],
  ["chocolates", "Chocolate Branco", 5.49, 0, "90 g"], ["chocolates", "Trufa de Chocolate", 2.99, 0, "un"],
  ["conservas", "Milho Verde", 2.59, 0, "170 g"], ["conservas", "Ervilha", 2.69, 0, "170 g"],
  ["conservas", "Atum Ralado", 6.99, 7.99, "170 g"], ["conservas", "Azeitona Verde", 7.49, 0, "200 g"],
  ["embutidos", "Nuggets de Frango", 12.9, 0, "300 g"], ["embutidos", "Salsicha Hot Dog", 11.99, 0, "kg"],
  ["embutidos", "Presunto Fatiado", 8.99, 9.99, "200 g"], ["embutidos", "Mortadela", 5.99, 0, "200 g"],
  ["frios", "Queijo Mussarela", 42.9, 0, "kg"], ["frios", "Iogurte Natural", 2.79, 0, "170 g"],
  ["frios", "Requeijão Cremoso", 6.49, 7.49, "200 g"], ["frios", "Manteiga", 11.9, 0, "200 g"],
  ["higiene", "Sabonete", 1.99, 0, "85 g"], ["higiene", "Creme Dental", 3.49, 0, "90 g"],
  ["higiene", "Shampoo", 10.9, 12.9, "350 ml"], ["higiene", "Papel Higiênico", 14.9, 0, "12 un"],
  ["limpeza", "Detergente", 2.49, 0, "500 ml"], ["limpeza", "Água Sanitária", 5.99, 0, "2 L"],
  ["limpeza", "Desinfetante", 5.49, 6.49, "1 L"], ["limpeza", "Sabão em Pó", 17.9, 0, "1,6 kg"],
  ["massas", "Macarrão Espaguete", 4.29, 0, "500 g"], ["massas", "Macarrão Parafuso", 4.29, 0, "500 g"],
  ["massas", "Molho de Tomate", 2.99, 0, "340 g"], ["massas", "Lasanha", 8.99, 9.99, "500 g"],
  ["matinais", "Pão Francês", 14.9, 0, "kg"], ["matinais", "Café Torrado", 17.9, 19.9, "500 g"],
  ["matinais", "Leite Integral", 4.99, 0, "1 L"], ["matinais", "Bolo de Cenoura", 12.9, 0, "un"],
];

window.PRODUCTS = RAW.map(([cat, name, price, old, unit], i) => ({
  id: "p" + (i + 1), cat, name, price, old: old || 0, unit,
  img: CATS.find(c => c.slug === cat).img,
}));

window.TIPS = [
  { t: "Faça a lista antes de sair", d: "Olhe a despensa e a geladeira, anote só o que falta e evite compras por impulso." },
  { t: "Compare pelo preço por quilo", d: "A embalagem maior nem sempre é a mais barata. Confira o preço por kg ou litro na etiqueta." },
  { t: "Aproveite as ofertas da semana", d: "Os produtos em promoção mudam toda semana. Veja o encarte e planeje as refeições." },
];

// Modelos de lista (nomes de produtos do catálogo)
window.MODELOS = {
  "dia-a-dia": ["Arroz Branco", "Feijão Carioca", "Leite Integral", "Pão Francês", "Café Torrado", "Detergente"],
  churrasco: ["Picanha Bovina", "Linguiça Toscana", "Refrigerante Cola", "Cerveja Pilsen", "Pão Francês", "Queijo Mussarela"],
  festa: ["Refrigerante Cola", "Suco de Laranja", "Bombom Sortido", "Bolo de Cenoura", "Biscoito Recheado", "Chocolate ao Leite"],
};
