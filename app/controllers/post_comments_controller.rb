class PostCommentsController < ApplicationController

	def create
		post = Post.find(params[:post_id])
        comment = PostComment.new(post_comment_params)
        comment.user_id = current_user.id
        comment.post_id = post.id
        comment.save
        redirect_to post_path(post.id)
	end

	def destroy
        post = Post.find(params[:post_id])
        comment = PostComment.find(params[:id])
        comment.destroy
        redirect_to post_path(post.id)
	end

  private
    def post_comment_params
    	params.require(:post_comment).permit(:user_id,:post_id,:comment)
    end
end
