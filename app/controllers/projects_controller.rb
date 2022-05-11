class ProjectsController < ApplicationController
    before_action :find_projects, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :create]
    
    def index
        render json: Project.all
    end

    def show
        render json: @projects
    end

    def create
        new_projects = Project.create!(projects_params)
        render json: new_projects, status: :created
    end

    def update
        projects = @projects
        projects.update(projects_params)
        render json: projects, status: :accepted
    end

    def destroy
        @projects.destroy!
        render json: {}, status: 204
    end

    private

    def find_projects
        @projects = Project.find(params[:id])
    end

    def projects_params
        params.permit(:title, :description, :due_date, :moodboard, :status, :client_id, :photographer_id)
    end

end
