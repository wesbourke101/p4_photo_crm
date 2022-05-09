class PhotographersController < ApplicationController
    before_action :find_photographer, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :create]
    # setting up full crud so I can copy paste to all and iterate out later... 

    def index
        render json: Photographer.all
    end

    def show
        render json: @photographer
    end

    def create
        new_photographer = Photographer.create!(photographer_params)
        render json: new_photographer, status: :created
    end

    def update
        photographer = @photographer
        photographer.update(photographer_params)
        render json: photographer, status: :accepted
    end

    def destroy
        @photographer.destroy!
        render json: {}, status: 204
    end

    private

    def find_photographer
        @photographer = Photographer.find(params[:id])
    end

    def photographer_params
        params.permit(:username, :password, :first_name, :last_name, :title, :email, :bio, :website, :social_media, :profile_picture)
    end
end
