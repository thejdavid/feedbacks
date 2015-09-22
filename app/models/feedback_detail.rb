class FeedbackDetail < ActiveRecord::Base
  belongs_to :employee,class_name: "User"
  belongs_to :feedback
end
