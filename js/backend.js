$(document).ready(function() {
  initForms();
});

// Инициализация форм
function initForms() {
  var body = $('body');
  body.on('submit', 'form', function(event) {
    event.preventDefault();
    var elem = $(this);
    var url = elem.attr('action');
    var data = elem.serialize();
    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      dataType: 'json',
      beforeSend: function() {
      },
      success: function(res) {
        if (res['status'] === 'ok') {
          elem.trigger('reset');
          thxModal();
        } else {
          errModal(res['message']);
        }
      }
    });
  });
}

//Открытие модалки "Спасибо"
function thxModal(message = false) {
  thanks();
}

//Открытие модалки "Ошибка"
function errModal(message = false) {
  $('#thanks .modal__heading').html('Ошибка!');
  if (message) {
    $('#thanks .modal__agreement').html(message);
  } else {
    $('#thanks .modal__agreement').html('Попробуйте еще раз');
  }
  thanks();
}