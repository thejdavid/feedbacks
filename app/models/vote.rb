class Vote < ActiveRecord::Base
  belongs_to :feedback_detail
  belongs_to :voter
  validates :vote, :voter_id, :feedback_detail_id, presence: true
end