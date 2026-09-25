// menu.js
const menuData = {
  // A última página do menu dispara "completed" automaticamente (usada em SCOFunctions.js)
  menu: [
    {
      title: "Fundamentos de Lean Manufacturing",
      page: "index.html",
      icon: "bi bi-pin-fill",
      isOpen: false, // Valor padrão, será ajustado dinamicamente
      subitems: [
        {
          nivel: "1",
          title: "Os vilões da produtividade: MUDA, MURI e MURA",
          link: "index.html#aula1-section-1",
        },
        {
          nivel: "1",
          title: "Desperdícios do Lean",
          link: "index.html#aula1-section-2",
        }, 
        {
          nivel: "1",
          title: "Agregação e não agregação de valor",
          link: "index.html#aula1-section-3",
        },
      ],
    },
  ],
};
// Exporta a variável para uso em outros arquivos (se usar módulos)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = menuData;
} else {
  window.menuData = menuData; // Disponível globalmente no navegador
}