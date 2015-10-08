class VotesController < ApplicationController
  def create
    if current_user
      vote = Vote.find_or_initialize_by(voter_id: current_user.id,feedback_detail_id:params[:feedback_detail_id])
      vote.vote = params[:data]
      vote.save
      p vote
      render :json => nil
    end
  end
end