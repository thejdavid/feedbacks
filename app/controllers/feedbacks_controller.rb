class FeedbacksController < ApplicationController
  respond_to :json
  def index
    if current_user
      all_user_details = FeedbackDetail.joins(:votes).where.not(votes: { voter_id: current_user.id })
      render :json => all_user_details
    end
  end
  def create
    if current_user
      employee_id = User.find_by(email:params[:data][:name]).id
      feedback = Feedback.create!(user_id:current_user.id)
      data = params[:data].permit(:feedback_content,:motivated,:best,:recommend,:considered)
      feedback_detail = FeedbackDetail.new(data)
      feedback_detail.employee_id = employee_id
      feedback_detail.feedback_id = feedback.id
      feedback_detail.save
      render :json => nil
    end
  end
  def search
    if current_user
      user_emails = User.all.map{|user| user.email}
      render :json => user_emails
    end
  end
  def myfb
    if current_user
      user_feedbacks = FeedbackDetail.where(employee_id:current_user.id)
      render :json => user_feedbacks
    end
  end
end