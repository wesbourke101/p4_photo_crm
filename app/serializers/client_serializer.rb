class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :title, :profile_picture
  has_many :projects
end
