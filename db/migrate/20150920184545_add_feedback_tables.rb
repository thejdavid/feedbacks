class AddFeedbackTables < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t| 
    t.integer :user_id 
    end

    create_table :feedbackdetails do |t| 
    t.integer :employee_id 
    t.integer :feedback_id
    t.text :feedback_content 
    t.text :motivated 
    t.text :best 
    t.text :recommend 
    t.text :considered 
    end
  end
end
