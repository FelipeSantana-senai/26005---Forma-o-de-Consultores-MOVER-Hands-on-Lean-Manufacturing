// menu.js
const menuData = {
  // A última página do menu dispara "completed" automaticamente (usada em SCOFunctions.js)
  menu: [
    {
      title: "Conhecendo o perfil do consultor",
      page: "index.html",
      icon: "bi bi-pin-fill",
      isOpen: false, // Valor padrão, será ajustado dinamicamente
      subitems: [
        {
          nivel: "1",
          title: "Habilidades do consultor",
          link: "index.html#aula1-section-1",
        },
        {
          nivel: "1",
          title: "Relacionamento com o cliente",
          link: "index.html#aula1-section-2",
        }, 
        {
          nivel: "1",
          title: "Domínio do regulamento",
          link: "index.html#aula1-section-3",
        },
        {
          nivel: "1",
          title: "Alinhamento com lideranças",
          link: "index.html#aula1-section-4",
        },
      ],
    },
    {
      title: "Comportamento na consultoria",
      page: "aula1.html",
      icon: "bi bi-pin-fill",
      isOpen: false, // Valor padrão, será ajustado dinamicamente
      subitems: [
        {
          nivel: "1",
          title: "Rapport e condução de reuniões",
          link: "aula1.html#aula2-section-1",
        },
        {
          nivel: "1",
          title: "Facilitação dos times kaizen e postura no Gemba",
          link: "aula1.html#aula2-section-2",
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