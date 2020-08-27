class CardsetsController < ApplicationController
    def index
        @cardsets = Cardset.all
        render json: @cardsets, include: [:flashcards]
    end
    
    def create
        if(params[:user_id].to_i == current_user.id)
            @cardset = Cardset.create(cardset_params)
            render json: @cardset
        else
            render json: {error: true, message: "You must login to create a set of flashcards"}
        end
    end

    def show
    end

    def edit
    end

    def update
    end

    def destroy
    end

    def cardset_params
        params.permit(:title, :subject, :access, :description)
    end

   

  




end
