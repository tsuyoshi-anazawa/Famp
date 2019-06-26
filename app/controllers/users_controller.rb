class UsersController < ApplicationController
  def index
    @users = User.page(params[:page]).reverse_order.per(20)
  end

  def show
  	@user = User.find(params[:id])
    @posts = @user.posts.page(params[:page]).reverse_order.per(10)
    @favorites = @user.favorites.page(params[:page]).reverse_order.per(10)

    @currentUserEntry = Entry.where(user_id: current_user.id)
    @userEntry=Entry.where(user_id: @user.id)
    if @user.id == current_user.id
    else
      @currentUserEntry.each do |cu|
        @userEntry.each do |u|
          if cu.room_id == u.room_id then
            @isRoom = true
            @roomId = cu.room_id
          end
        end
      end
      if @isRoom
      else
        @room = Room.new
        @entry = Entry.new
      end
    end
  end

  def edit
  	@user = User.find(params[:id])
  end

  def update
  	@user = User.find(params[:id])
    if
  	  @user.update(user_params)
  	  redirect_to user_path(@user.id)
    else
      render :edit
    end
  end

  private
    def user_params
    	params.require(:user).permit(:name,:profile_image,:introduction)
    end

end
