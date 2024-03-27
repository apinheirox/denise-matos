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

  $(document).ready(function() {
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();

      $('.section-hidden').each(function() {
        var position = $(this).offset().top;

        if (position < (scroll + windowHeight * 0.8)) {
          $(this).addClass('section-visible');
        }
      });
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();

      $('.section-hidden-2').each(function() {
        var position = $(this).offset().top;

        if (position < (scroll + windowHeight * 0.8)) {
          $(this).addClass('section-visible');
        }
      });
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();


      $('.section-hidden-3').each(function() {
        var position = $(this).offset().top;

        if (position < (scroll + windowHeight * 0.8)) {
          $(this).addClass('section-visible');
        }
      });
    });
  });