class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :created_at
end
