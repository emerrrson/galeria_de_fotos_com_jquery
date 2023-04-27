$(document).ready(function() {
   // document.querySelector('header button').addEventListener('click', function() {

   // }) Código no JavaScript sem JQuery para chamar uma função 

   $('header button').click(function() {
    $('form').slideDown();
       // alert('Expandir formulário') // Com JQuery
    }) 

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const enderecoDaNovaImagem = $('#endereco-da-nova-imagem').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src = "${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`<div overlay-imagem-link><a href = "${enderecoDaNovaImagem} target ="_blank"> Ver a imagem em tamanho real </a></div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); // appendTo usamos para inserir um conteúdo HTML dentro de uma outra TAG
        $('#endereco-da-nova-imagem').val(' ');
        $(novoItem).fadeIn(2000); // fadeIn faz uma transição no elemento

    })
}) 


