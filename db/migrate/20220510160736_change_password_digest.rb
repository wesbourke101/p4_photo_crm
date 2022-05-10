class ChangePasswordDigest < ActiveRecord::Migration[6.1]

  def change
    remove_column :clients, :password
    add_column :clients, :password_digest, :string
    
    remove_column :photographers, :password
    add_column :photographers, :password_digest, :string
      
  end
end
