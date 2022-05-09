class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :bio, :website, :social_media, :profile_picture
end
