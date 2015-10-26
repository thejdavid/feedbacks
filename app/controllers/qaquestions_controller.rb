class QaquestionsController < ApplicationController
  respond_to :json
  def index
    if current_user
      question = Qaquestion.all
      render :json => question
    end
  end
  def create
    if current_user
      Qaquestion.create!(title:params[:question][:title],content:params[:question][:question_content],user_id:current_user.id)
      render :json => nil
    end
  end
  def show
    if current_user
      render :json => Qaquestion.find(params[:id])
    end
  end
end