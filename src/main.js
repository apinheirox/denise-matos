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