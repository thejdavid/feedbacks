class QavotesController < ApplicationController
  def create
    if current_user
      vote = Qavote.find_or_initialize_by(user_id: current_user.id,question_id:params[:question_id],vote:params[:vote],answer_id:params[:answer_id])
      vote.vote = params[:data]
      vote.save
      render :json => nil
    end
  end
end