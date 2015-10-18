class Qaanswer < ActiveRecord::Base
  has_many :votes
  belongs_to :question
  belongs_to :user
end