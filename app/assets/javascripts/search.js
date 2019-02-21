$(function() {
  var selected_user = []
  $(document).on("click",".user-search-add",function(){
    var name =  $(this).attr('data-user-name');
    var id = $(this).attr('data-user-id');
    selected_user.push(id);
    $(this).parent().remove();
    userN_delete(name, id);
  });

$(document).on("click",".user-search-remove",function(){
  $(this).parent().remove();
});

var search_list = $("#user-search-result")
var group_list = $("#chat-group-users")

function appendUser(user) {
  var html = `<div class="user-add-line">
                  <span>
                    ${ user.name }
                  </span>
                  <span class="user-search-add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加
                  </span>
              </div>`
    search_list.append(html);
}

function appendNoUser(user) {
  var html = `<div>
                <div class="nouser_alert">${ user }</div>
              </div>`
  search_list.append(html);
}

function userN_delete(name, id) {
  var html = `<div class="chat-group-user clearfix js-chat-member user-delete-line" id="chat-group-user-${ id }">
                <input name="group[user_ids][]" type="hidden" value="${ id }">
                  <p class="chat-group-user__name">${ name }</p>
                    <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</a>
              </div>`
  group_list.append(html);
}

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    if (input.length === 0) {
      $("#user-search-result").empty();
      return false;
    }

    $.ajax({
      type: 'GET',
      url: '/users/users/search',
      data: { keyword: input,
              user_ids: selected_user
            },
      dataType: 'json'
    })

    .done(function(users) {
      if (users.length !== 0) {
      $("#user-search-result").empty();
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        $("#user-search-result").empty();
        appendNoUser("一致するユーザーはいません")
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました')
    })
  });
});
