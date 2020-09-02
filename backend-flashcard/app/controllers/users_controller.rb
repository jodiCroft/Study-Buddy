class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, include: [:cardsets, :flashcards]
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user, include: [:cardsets, :flashcards]
    end

    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            session[:user_id] = @user.id 
            render json: @user, include: [:cardsets]
        else
            render json: {
                message: @user.errors.messages
            }
        end
    end

    def show
        @user = User.find(params[:id])
       if @user
          render json: {
            user: @user, include: [:cardsets]
          }
        else
          render json: {
            message: @user.errors.messages
          }
        end
    end

    def update
        @user.update(:first_name, :last_name, :password)
        render json: @user, include: [:cardsets]
    end

    def destroy
        @user.destroy
    end

    

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :id)
    end

end


