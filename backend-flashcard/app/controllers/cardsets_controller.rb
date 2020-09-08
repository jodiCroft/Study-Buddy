class CardsetsController < ApplicationController
    def index
        @cardsets = Cardset.all
        render json: @cardsets, include: [:flashcards, :user]
        # Need to also include users - don't know how to do this ^^
        # include: [:cardsets => {:include => :flashcards}]
    end
    
    def create
      
        if(params[:user_id].to_i == session[:user_id])
            @cardset = Cardset.create({user_id:params[:user_id], title:params[:title], subject:params[:subject], access:"public", description:params[:description]})
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
      @cardset = Cardset.find_by(id: params[:id])
      @cardset.update(title: params[:title], description: params[:description], subject: params[:subject])
      render json: @cardset, include: [:flashcards]
  end

    def destroy
      @cardset = Cardset.find(params[:id])
      @cardset.destroy
    end

    

   

  




end
