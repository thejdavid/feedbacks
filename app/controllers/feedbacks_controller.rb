class FeedbacksController < ApplicationController
  respond_to :json
  def index
    z = FeedbackDetail.all
    render :json => z
  end

  def create
    employee_id = User.find_by(email:params[:data][:name]).id
    feedback = Feedback.create!(user_id:current_user.id)
    test = params[:data].permit(:feedback_content,:motivated,:best,:recommend,:considered)
    todo = FeedbackDetail.new(test)
    todo.employee_id = employee_id
    todo.feedback_id = feedback.id
    todo.save
    render :json => nil
  end
  def search
    user_emails = User.all.map{|user| user.email}
    render :json => user_emails
  end
  def myfb
    user_feedbacks = FeedbackDetail.where(employee_id:current_user.id)
    render :json => user_feedbacks
  end

end


