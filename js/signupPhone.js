$(function() {
  var $phone = $('#phone');
  var $next = $('#signup');
  var $land = $('.land');
  var $iconView = $('#dropdownMenu1');
  var $icon = $('.icon');

  // validacion 10 numeros
  $phone.on('input', function() {
    if ($(this).val().length === 10) {
      activeButton();
    } else {
      desactiveButton();
    }
  });

  //  evento menu icono
  console.log($('#land'));
  console.log($('#getIcon'));

  $land.on('click', function(event) {
    event.preventDefault();
    var $getLand = $(this);

    if ($getLand) {
      // console.log($getLand);
      $getLand.attr('hidden', false);
    } else {
      $getLand.attr('show', false);
    }
  });

  // generar CODIGO
  var codigo = Math.floor(Math.random() * (999 - 100)) + 100;
  localStorage.code = codigo;
  // VALIDAR CODIGO
  $next.on('click', function(event) {
    event.preventDefault();
    console.log('alerta ' + codigo);
    alert('Tu Código es: LAB-' + codigo);
    window.location.href = 'signupCodigo.html';
  });

  // funciones active
  function activeButton() {
    $next.attr('disabled', false);
    $next.css('background', '#813b7a');
    $next.css('color', 'white');
  }
  function desactiveButton() {
    $next.attr('disabled', true);
  }
});
