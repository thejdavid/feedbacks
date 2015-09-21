class Feedback < ActiveRecord::Base
  belongs_to :user
  has_one :feedback_detail
end

