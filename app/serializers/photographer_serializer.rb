class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :first_name, :last_name, :bio, :website, :social_media, :profile_picture
end
