class SessionsController < ApplicationController
 skip_before_action :authorized, only: :create

 def create
  
    user = Client.find_by(username: params[:username]) || Photographer.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def show
    client = Client.find(session[:user_id]) || Photographer.find(session[:user_id])
        if client 
            render json: client
        else 
        render json: { message: "No user logged in" }, status: 401
        end
  end

  def destroy
	  session.delete :user_id
    # session[:user_id].delete
  end

end