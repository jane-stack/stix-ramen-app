class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    
    def logged_in?
        !!session[:user_id]
    end

    def current_user
        User.find_by_id(session[:user_id])
    end

    def authorize
        render json: { errors: ["You must be logged in"] }, status: 401 unless logged_in?
    end

end