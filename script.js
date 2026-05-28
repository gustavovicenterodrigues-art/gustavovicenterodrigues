
// Alterna conteúdo "Ver mais / Ver menos"
document.querySelectorAll('.toggle-content').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      button.innerHTML = "Ver mais";
    } else {
      content.style.display = "block";
      button.innerHTML = "Ver menos";
    }
  });
});

// Alterna o menu hambúrguer
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Seleciona o botão de menu e o menu (ul)
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar ul');

// Adiciona um evento de clique no botão de menu
menuToggle.addEventListener('click', () => {
  // Alterna a classe 'active' na lista de navegação
  navbarLinks.classList.toggle('active');
});

    });
  }
});