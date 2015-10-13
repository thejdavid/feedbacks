class InitQa < ActiveRecord::Migration
  def change
    create_table :qavotes do |t|
      t.boolean :vote
      t.integer :user_id
      t.integer :question_id
      t.integer :answer_id
      t.timestamps
    end
    create_table :qaquestions do |t|
      t.text :title
      t.text :content
      t.integer :user_id
      t.timestamps
    end
    create_table :qaanswers do |t|
      t.text :content
      t.integer :question_id
      t.integer :user_id
      t.timestamps
    end
  end
end
