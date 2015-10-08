class Vote < ActiveRecord::Base
  belongs_to :feedback_detail
  belongs_to :voter
end
