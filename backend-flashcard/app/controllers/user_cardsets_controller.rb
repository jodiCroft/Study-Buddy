class UserCardsetsController < ApplicationController

    def index
        @user_cardsets = UserCardset.all
        render json: @user_cardsets
    end
    
    def create
        @user_cardset = UserCardset.create({user_id:params[:user_id], cardset_id:params[:cardest_id]})
            render json: @user_cardset
    end




end
