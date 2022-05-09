class Client < ApplicationRecord
    has_many :projects, dependent: :destroy
    has_many :photographers, through: :projects
end
