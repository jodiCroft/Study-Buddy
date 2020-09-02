# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "Julio", last_name: "Chazari", username: "juliooo", password: "julio" )
Cardset.create(
    user_id: 1, title: "English 101", subject: "English", access: "public", description: "Basic test prep flashcards for English101"
)
Flashcard.create([
    {front: "Summary" ,back: "shows an understanding of a work's main ideas and the relationships among those ideas" , cardset_id: 1 },
    {front: "subject-verb agreement" ,back: "subject and verb -both plural or singular, verb must agree with subject" , cardset_id: 1 },
    {front: "pronoun",back: "4 types pronouns (replaces noun) Subject, object, possessive and demonstrative" , cardset_id: 1 },
    {front: "Run on sentence",back: "compound sentences having multiple ideas that is not seperated or punctuated correctly" ,hint: "compound sentences having multiple ideas that is not seperated or punctuated correctly." , cardset_id: 1 }
])


