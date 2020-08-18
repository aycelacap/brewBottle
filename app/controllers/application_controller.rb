class ApplicationController < ActionController::Base

    # chrlll

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= user.find_by(session_token: session[:session_token])
    end

    def logged_in? 
        !!current_user
    end

    def require_logged_in!
        redirect_to new_session_url if !logged_in?
    end

    def login(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

end