$(document).ready(function(){
    $('#carouselExampleControls').carousel({
        interval: false // Impede a auto-rotação automática
    });

    // Navegação para a esquerda
    $('.carousel-control-prev').click(function(){
        $('#carouselExampleControls').carousel('prev');
    });

    // Navegação para a direita
    $('.carousel-control-next').click(function(){
        $('#carouselExampleControls').carousel('next');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function() {
      sidebar.classList.toggle("show");
    });
  });

  $(document).ready(function(){
    // Adicionando animação ao clicar nos links da barra de navegação
    $("nav a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() { // Adiciona um evento de rolagem à janela
      var scroll = $(window).scrollTop(); // Obtém a posição de rolagem atual

      if (scroll > 100) { // Se a posição de rolagem for superior a 100 pixels
        $(".navbar").addClass("scrolled"); // Adiciona a classe "scrolled" ao cabeçalho
      } else {
        $(".navbar").removeClass("scrolled"); // Remove a classe "scrolled" do cabeçalho
      }
    });
  });
  //ANIMAÇÕES
  AOS.init();