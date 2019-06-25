class UsersController < ApplicationController
  def index
    @users = User.page(params[:page]).reverse_order.per(20)
  end

  def show
  	@user = User.find(params[:id])
    @posts = @user.posts.page(params[:page]).reverse_order.per(10)
    @favorites = @user.favorites.page(params[:page]).reverse_order.per(10)
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
