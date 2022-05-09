class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :due_date, :moodboard, :status, :client_id, :photographer_id
  belongs_to :photographer
  belongs_to :client
end
