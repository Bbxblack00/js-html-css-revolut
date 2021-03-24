// sfruttando quando visto questa mattina a lezione, riprodurre la dropdown (menu in alto)
//  che trovate al sito di Revolut linkato qua sotto


function activeMenu() {

  $('#start').click(function() {

    $('.big-menu').addClass('visible');

    $('.menu-left, .menu-right').addClass('invisible');

    $('.burger').removeClass('active');

  });

}

function disactiveMenu() {

  $('#exit').click(function() {

    $('.big-menu').removeClass('visible');

    $('.menu-left, .menu-right').removeClass('invisible');

    $('.burger').addClass('active');

  });

}

// .mouseenter(function-name)

function init() {

activeMenu();
disactiveMenu();

}

$(document).ready(init);
