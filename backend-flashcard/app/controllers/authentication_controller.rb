class AuthenticationController < ApplicationController

    def login
        user = User.find_by({ username: params[:username]})
        if(user && user.authenticate(params[:password]))
            session[:user_id] = user.id
            render json: { success: true, id: user.id }
        else
            render json: { success: false, id: nil }
        end
    end


    def is_logged_in
        if session[:user_id]
            current_user = User.find(session[:user_id])
            render json: { success: true, id: current_user.id }
        else
            render json: { success: false, id: nil }
        end
    end

    

    def logout
        session[:user_id]=nil
        render json: {message: 'You are logged out!'}
    end

end