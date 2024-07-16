function coffee_needs(age,cpd) {
    days = (60 -age) * 365
    coffee = days * cpd
    console.log(`You will need ${coffee} of coffee to keep
you awake until the age of 60.`) 
}

age = 23
cpd = 3
coffee_needs(age,cpd)