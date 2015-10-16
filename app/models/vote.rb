class Vote < ActiveRecord::Base
  belongs_to :feedback_detail
  belongs_to :voter, class_name: "User"
  validates :vote, :voter_id, :feedback_detail_id, presence: true
end
