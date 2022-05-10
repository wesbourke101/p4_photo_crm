class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  before_action :authorized, only: :create
  private

  def authorized 
	  render json: { message: "You are not authorized" }, status: :unauthorized unless Client.find_by(id: session[:user_id]) || Photographer.find_by(id: session[:user_id])
  end
  
  def record_not_found
    render json: { error: "Record not found"}, status: :not_found
  end

  def unprocessable_entity(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
