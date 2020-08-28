class FlashcardsController < ApplicationController

    def index
        @flashcards = Flashcard.all
        render json: @flashcards
    end

    def create
    #      t.string "front"
    # t.string "back"
    # t.string "hint"
    # t.integer "cardset_id"
        
    end
   

    def show
    end

    def update
    end

    def destroy
    end

    


end
