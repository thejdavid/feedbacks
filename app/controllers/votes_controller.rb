class VotesController < ApplicationController
  def create
    if current_user
      vote = Vote.find_or_initialize_by(voter_id: current_user.id,feedback_detail_id:params[:feedback_detail_id])
      vote.vote = params[:data]
      vote.save
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
