# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.create!(email:"test@test.com",password:"password")
30.times{User.create!(email:Faker::Internet.email,password:"password")}
u = User.all
100.times{Feedback.create!(user_id:u.sample.id)}
f = Feedback.all
choice = ["never","always","sometimes","Rarely","Mostly","N/A"]
100.times{FeedbackDetail.create!(employee_id: u.sample.id, feedback_id:f.sample.id , feedback_content:Faker::Lorem.paragraph(15) , motivated: choice.sample, best: choice.sample, recommend: choice.sample, considered: choice.sample)}
100.times{Qaquestion.create!(title: Faker::Hacker.say_something_smart, content: Faker::Lorem.paragraph(3), user_id: u.sample.id)}
fd = FeedbackDetail.all
  100.times{Vote.create!(voter_id: u.sample.id, feedback_detail_id: fd.sample.id,actionable: (1..5).to_a.sample, specific: (1..5).to_a.sample, kind: (1..5).to_a.sample)}
