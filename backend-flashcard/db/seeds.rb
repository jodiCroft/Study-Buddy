# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

30.times do
    username = Faker::FunnyName.name.gsub(/\s+/, '')
    User.create(
        first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , username: username , password: "password"
    )
end


100.times do
    user_id = rand(1..30)
    Cardset.create(user_id: user_id  , title: Faker::Educator.course_name , subject: Faker::Educator.subject , access: "public", description: Faker::Hacker.say_something_smart)
end


500.times do
    cardset_id = rand(1..100)
    Flashcard.create(front: Faker::Hipster.sentence(word_count: 6), back: Faker::ChuckNorris.fact, cardset_id: cardset_id)
end





