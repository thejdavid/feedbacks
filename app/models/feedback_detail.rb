class FeedbackDetail < ActiveRecord::Base
  has_many :votes
  belongs_to :employee,class_name: "User"
  belongs_to :feedback
  validates :employee_id, :feedback_content, :motivated, :best, :recommend, :considered, presence: true
  validates :feedback_content, length: { minimum: 250 }
end
