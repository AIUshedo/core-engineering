class Person

    def name
        # create a name variable
        name = "Steve"
    end

    def age
        # create age variable here
        age = 26
    end

    def children
        # create children array here
        children_array = ["Child 1", "Child 2", "Child 3", "Child 4"]

    end

    def address

        # create address hash here
        address = {
          house_number: 37,
          street: "Somewhere",
          town: "Over",
          county: "The Rainbow",
          postcode: "4EEVVAA",
          email_address: "notavailable@hotmail.com",
          email_addresses: ["notavailable@hotmail.com", "notavailable2@hotmail.com"],

        }
    end

    def password

        # do not change these variables
        favourite_things = ["motorbike" , "cat" , "travel"]
        memorable_stuff = {
          birth_year: 1983,
          mothers_name: "Eve",
          birth_town: "Richmond"
        }
password = favourite_things[1]+ " "+ memorable_stuff[:birth_town]
    end

end
