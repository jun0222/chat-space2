$(function(){
  function buildHTML(message){
    if (message.image.url !== null) {
      var html = `<div class="message" data-id="${ message.id }">
                      <a class="upper-message__user-name">${ message.name}</a>
                      <a class="upper-message__date">${message.time}</a>\n
                      <p>${message.content}</p>
                      <img src="${message.image.url}" class="lower-message__image">
                  </div>`
                  } else {
      var html = `<div class="message" data-id="${ message.id }">
                      <a class="upper-message__user-name">${ message.name}</a>
                      <a class="upper-message__date">${message.time}</a>\n
                      <p>${message.content}</p>
                  </div>`
             }
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      type: "POST",
      url: href,
      data: formData,
      dataType: 'json',
      contentType: false,
      processData: false,
      disabled: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#new_message')[0].reset();
      $('.main').animate({
        scrollTop: $('.messages')[0].scrollHeight
      })
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
  });
});
