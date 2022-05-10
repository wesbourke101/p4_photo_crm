puts "Seeding Photographers...."

p1 = Photographer.create!(username: "photo1", password: "123", email: "photo@photo.com", first_name: "Jimothy", last_name: "Jamesjohnson", bio: "i am a photo-grapher", website: "mywebsite.com", social_media: "www.instagram.com", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U0308PFKVGX-d709024abba2-192")
p2 = Photographer.create!(username: "photo2", password: "123", email: "photo@photo.com", first_name: "Marge", last_name: "Simpson", bio: "I graph photos", website: "mywebsite.com", social_media: "www.instagram.com", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U0308PFKVGX-d709024abba2-192")
p3 = Photographer.create!(username: "photo3", password: "123", email: "photo@photo.com", first_name: "Bilbo", last_name: "Baggins", bio: "phos meaning light, graph meaning a baby giraffe", website: "mywebsite.com", social_media: "www.instagram.com", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U0308PFKVGX-d709024abba2-192")


puts "Seeding Clients...."

c1 = Client.create!(username: "user1", password: "123", first_name: "caleb", last_name: "lastname", title: "student", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U0308PFKVGX-d709024abba2-192")
c2 = Client.create!(username: "user2", password: "123", first_name: "wes", last_name: "lastname", title: "student", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02USNBSR0D-c1509953299c-512")
c3 = Client.create!(username: "user3", password: "123", first_name: "kev", last_name: "lastname", title: "student", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02NJ4G1803-7c1afe18b5e0-192")
c4 = Client.create!(username: "user4", password: "123", first_name: "kristin", last_name: "lastname", title: "student", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02NS0VD189-g7e794c57d46-192")
c5 = Client.create!(username: "user5", password: "123", first_name: "chett", last_name: "lastname", title: "instructor", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-UD88L20GM-06e73e1b25fc-512")

puts "Seeding Projects...."

Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "Completed", client: c1, photographer: p1)
Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "In progress", client: c2, photographer: p2)
Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "In progress", client: c3, photographer: p3)
Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "Completed", client: c4, photographer: p1)
Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "pending approval", client: c5, photographer: p2)
Project.create!(title: "Professional headshots", description: "Lorem ipsum", due_date: DateTime.new , moodboard: "www.moodboard.com", status: "pending approval", client: c1, photographer: p3)

puts "Done seeding!"

