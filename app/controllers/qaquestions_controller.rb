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
      Qaquestion.create!(title:params[:title],content:param[:question],user_id:current_user.id)
      render :json => nil
    end
  end
  def show
    if current_user
      puts "bite bite bite bite bite"
      render :json => Qaquestion.find(params[:id])
    end
  end
end