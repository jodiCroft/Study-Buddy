class FlashcardsController < ApplicationController

    def index
        @flashcards = Flashcard.all
        render json: @flashcards
    end

    def create

        @flashcard = Flashcard.new({front:params[:front], back:params[:back], hint:params[:hint], cardset_id:params[:cardset_id]})
        if @flashcard.valid?
            @flashcard.save 
            render json: @flashcard
        else
            render json: {
                message: @flashcard.errors.messages
            }
        end
 
        
    end
   

    def show
    end

    def update
    end

    def destroy
    end

    


end
