class VotesController < ApplicationController
  def create
    if current_user
      params.permit(:id,:specific,:kind,:actionable)
      vote = Vote.find_or_initialize_by(voter_id: current_user.id,feedback_detail_id:params[:id])
      vote.specific = params[:specific]
      vote.actionable = params[:actionable]
      vote.kind = params[:kind]
      p vote.errors.full_messages
      vote.save
      p vote.errors.full_messages
      render :json => nil
    end
  end
  def index
    user = User.find(current_user.id)
    array = []
    user_fbdetail_and_votes_joined = user.feedbacks.includes(:feedback_detail=>:votes)
    user_fbdetail_and_votes_joined.each {|feedback| array << feedback.feedback_detail.as_json({:include=>:votes})}
    render :json => array
  end
end