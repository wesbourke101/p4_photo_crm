class ClientsController < ApplicationController
    before_action :find_client, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :create]
    # setting up full crud so I can copy paste to all and iterate out later... 

    def index
        render json: Client.all
    end

    def show
            render json: @client   
    end

    def create
        new_client = Client.create!(client_params)
        render json: new_client, status: :created
    end

    def update
        client = @client
        client.update(client_params)
        render json: client, status: :accepted
    end

    def destroy
        @client.destroy!
        render json: {}, status: 204
    end

    private

    def find_client
        @client = Client.find(params[:id])
    end

    def client_params
        params.permit(:username, :password, :first_name, :last_name, :title, :profile_picture, :password_confirmation)
    end
end

