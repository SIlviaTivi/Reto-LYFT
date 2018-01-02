$(function() {
  var $valCodigo = $('#valCodigo');
  var $valButton = $('#valButton');
  var $ups = $('.ups');

  $valCodigo.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length === 3) {
      activeButton();
      var verifyCode = $(this).val();
    } else {
      desactiveButton();
    }

    $valButton.on('click', function(event) {
      event.preventDefault();
      if (verifyCode === localStorage.code) {
        window.location.href = 'signup.html';
        $ups.attr('hidden', true);
      } else {
        $ups.attr('hidden', false);
      }
    });
  });


  // funciones active
  function activeButton() {
    $valButton.attr('disabled', false);
    $valButton.css('background', '#813b7a');
    $valButton.css('color', 'white');
  }
  function desactiveButton() {
    $valButton.attr('disabled', true);
  }
});
