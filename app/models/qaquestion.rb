class Qaquestion < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :votes
end
