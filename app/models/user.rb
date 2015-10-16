class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :feedbacks
  has_many :feedback_details,:through => :feedbacks, foreign_key: "employee_id"
  has_many :feedback_details,:through => :feedbacks
  has_many :votes,foreign_key: "voter_id"
  belongs_to :team
end
