class AddMultipleVoteValues < ActiveRecord::Migration
    def self.up
      add_column :votes, :actionable, :integer
      add_column :votes, :specific, :integer
      add_column :votes, :kind, :integer

    end

    def self.down
      remove_column :votes, :vote
    end
end
