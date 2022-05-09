class CreatePhotographers < ActiveRecord::Migration[6.1]
  def change
    create_table :photographers do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :bio
      t.string :website
      t.string :social_media
      t.string :profile_picture

      t.timestamps
    end
  end
end
