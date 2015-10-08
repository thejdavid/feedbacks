class SurveyTables < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.string :title
      t.string :random_code
      t.integer :creator_id
      t.timestamps
    end
    create_table :responses do |t|
      t.integer :survey_id
      t.integer :question_id
      t.integer :answer_id
      t.timestamps
    end
    create_table :questions do |t|
      t.text :query
      t.integer :survey_id
      t.timestamps
    end
    create_table :answers do |t|
      t.text :choice
      t.integer :question_id
      t.timestamps
    end
  end
end
