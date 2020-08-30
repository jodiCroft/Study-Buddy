class CardsetsController < ApplicationController
    def index
        @cardsets = Cardset.all
        render json: @cardsets, include: [:flashcards]
    end
    
    def create
      
        if(params[:user_id].to_i == session[:user_id])
            @cardset = Cardset.create({title:params[:title], subject:params[:subject], access:"public", description:params[:description]})
            render json: @cardset
        else
            render json: {error: true, message: "You must login to create a set of flashcards"}
        end
    end

    def show
        @cardset = Cardset.find(params[:id])
        if @cardset
           render json: {
             cardset: @cardset, include: [:flashcards]
           }
         else
           render json: {
             message: @cardset.errors.messages
           }
         end
    end

    def edit
    end

    def update
    end

    def destroy
    end

    

   

  




end
