json.name @message.user.name
json.time @message.created_at.strftime('%Y/-%m/%d %H:%M:%S')
json.content @message.content
json.image @message.image
json.user_id @message.user_id
json.group_id @message.group_id
