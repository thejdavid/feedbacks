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
    c = User.find(current_user.id)
    array = []
    t = c.feedbacks.includes(:feedback_detail=>:votes)
    t.each {|x| array << x.feedback_detail.as_json({:include=>:votes})}
    render :json => array
  end
end
