class Feedback < ActiveRecord::Base
  belongs_to :user
  has_one :feedback_detail
  validates :user_id, presence: true
  validates_associated :feedback_detail
end

