$(function(){
  function buildHTML(message){
    var html = `<div class="message">
                    <a class="upper-message__user-name">${ message.name}</a><a class="upper-message__date">${message.time}</a>\n
                    <p>${message.content}</p>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.hidden').val('')
      $('.form__message').val('');
      $('.main').animate({
        scrollTop: $('.messages')[0].scrollHeight
      });
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
  });
});


