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