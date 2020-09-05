class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, include: [:cardsets => {:include => :flashcards}]
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user, include: [:cardsets => {:include => :flashcards}]
    end

    def create
        @user = User.new(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], password: params[:password])
        if @user.valid?
            @user.save
            session[:user_id] = @user.id 
            render json: @user, include: [:cardsets => {:include => :flashcards}]
        else
            render json: {
                message: @user.errors.messages
            }
        end
    end

    # def show
    #     @user = User.find(params[:id])
    #    if @user
    #       render json: {
    #         user: @user, include: [:cardsets]
    #       }
    #     else
    #       render json: {
    #         message: @user.errors.messages
    #       }
    #     end
    # end

    def update
        @user = User.find_by(id: params[:id])
        @user.update(username: params[:username], password: params[:password])
        render json: @user, include: [:cardsets]
    end

    def destroy
        @user.destroy
    end

    

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password)
    end

end


