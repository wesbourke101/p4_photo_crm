class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :title, :profile_picture
end
