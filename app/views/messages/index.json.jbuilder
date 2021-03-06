if @new_message.present?
  json.array! @messages do |message|
    json.name message.user.name
    json.time message.created_at.strftime('%Y/-%m/%d %H:%M:%S')
    json.content message.content
    json.image message.image
    json.id message.id
  end
end
