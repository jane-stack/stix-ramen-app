User.destroy_all
Review.destroy_all

#Users
jane = User.create(username: "janeur", email: "janeng@email.com", password: "Vt8684ka2#")
jimmy = User.create(username: "jvng", email: "jv81@email.com", password: "testing123$")

#Reviews
review1 = Review.create(content: "Best ramen I've ever had! Totally recommend!", user: jane)
review2 = Review.create(content: "Flavors were amazing. A must try!", user: jimmy)