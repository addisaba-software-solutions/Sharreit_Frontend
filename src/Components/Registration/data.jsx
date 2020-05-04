exports.fields = {
    email: {
        error: false,
        errorText: "Please enter your email"
    },
    
    password: {
        error: false,
        errorText: "Please enter your password"
    },
    
    confirm_password: {
        error: false,
        errorText: "Passwords don't match"
    },
    
    address_steet: {
        error: false,
        errorText: "Please enter your street address"
    },
    
    city: {
        error: false,
        errorText: "Please enter the city you reside in"
    },
    
    state: {
        error: false,
        errorText: "Please enter the state you reside in"
    }
}

exports.options = {
    country: ['US', 'UK']
}