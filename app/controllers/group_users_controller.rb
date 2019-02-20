class GroupUsersController < ApplicationController
  def index
    @group_user = GroupUser.create(group_user_params)
  end

  private
  def group_user_params
    params.require(:group_user).permit(:group_id, :user_id)
  end
end
