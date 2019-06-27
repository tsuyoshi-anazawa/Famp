class PostsController < ApplicationController

  before_action :authenticate_user!, except: [:index]

    def index
      @search = Post.ransack(params[:q])

      @results =@search.result.page(params[:page]).reverse_order.per(5)
    end

    def new
      @post = Post.new
    end

    def show
      @post = Post.find(params[:id])
      @post_comment = PostComment.new
    end

    def create
      @post = Post.new(post_params)
      @post.user_id = current_user.id
      if
        @post.save
        redirect_to posts_path
      else
        render :new
      end
    end

    def destroy
      post = Post.find(params[:id])
      post.destroy
      redirect_to posts_path
    end

  private
    def post_params
      params.require(:post).permit(:title,:content)
    end
end
