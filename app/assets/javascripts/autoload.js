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

  $(function(){
    setInterval(update, 5000)
  });

  function update(){
    if($('.messages')[0]){
      var message_id = $('.message:last').data('id')
    } else {
      var message_id = 0
    }
    var href = window.location.href
    $.ajax({
      url: href,
      type: 'GET',
      data: { id: message_id },
      dataType: 'json',
    })
    .always(function(data){
      $.each(data, function(i, data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.main').animate({
        scrollTop: $('.messages')[0].scrollHeight
      })
      })
    })
  }
});
