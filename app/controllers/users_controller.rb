class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    # POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201 #created
    end

    # GET /me
    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

end
