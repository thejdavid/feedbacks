class FeedbacksController < ApplicationController
  respond_to :json
  def index
    z = FeedbackDetail.all
    render :json => z
  end

  def create
    feedback = Feedback.new(user_id:current_user.id)
    test = params[:data].permit(:feedback_content,:motivated,:best,:recommend,:considered)
    todo = FeedbackDetail.new(test)
    todo.feedback_id = feedback.id
    if todo.save && feedback.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end
end


