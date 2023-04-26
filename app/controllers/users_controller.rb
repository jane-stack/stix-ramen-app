class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    # skip the authorize action for signup

    def index
        render json: User.all
    end

    # POST /signup
    def create
        user = User.create(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: 201
        else
            render json: { errors: user.errors.full_messages }, status: 422
        end
    end

    # GET /me
    def show
        render json: current_user
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

end
