class Client < ApplicationRecord
    has_many :projects, dependent: :destroy
    has_many :photographers, through: :projects
    has_secure_password

    validates :username, uniqueness: true, presence: true
end
