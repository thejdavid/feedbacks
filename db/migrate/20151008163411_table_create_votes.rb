class TableCreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :vote
      t.integer :voter_id
      t.integer :feedback_detail_id
      t.timestamps
    end
  end
end
