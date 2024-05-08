$(document).ready(function(){
  
  $('#carouselExampleControls1').carousel({
      interval: false 
  });

  
  $('#carouselExampleControls2').carousel({
      interval: false 
  });

  
  $('.carousel-control-prev').click(function(){
      $(this).closest('.carousel').carousel('prev');
  });

  
  $('.carousel-control-next').click(function(){
      $(this).closest('.carousel').carousel('next');
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
    $(window).scroll(function() { 
      var scroll = $(window).scrollTop(); 

      if (scroll > 100) { 
        $(".navbar").addClass("scrolled"); 
      } else {
        $(".navbar").removeClass("scrolled"); 
      }
    });
  });
  
  AOS.init();

  
  document.getElementById("enviarWhatsapp").addEventListener("click", function(event) {
    event.preventDefault();

    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    
    if (nome && telefone && email && mensagem) {
        
        const textoMensagem = `Nome: ${nome}%0ATelefone: ${telefone}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

        
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=5571985197223&text=${textoMensagem}`;
        
        
        window.open(linkWhatsapp, '_blank');
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
});