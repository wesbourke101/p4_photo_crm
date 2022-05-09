class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.datetime :due_date
      t.string :moodboard
      t.string :status
      t.integer :client_id
      t.integer :photographer_id

      t.timestamps
    end
  end
end
