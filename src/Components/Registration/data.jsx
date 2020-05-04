exports.fields = {
    email: {
        required: true,
        error: false,
        errorText: "Please enter your email"
    },
    
    password: {
        required: true,
        error: false,
        errorText: "Please enter your password"
    },
    
    confirm_password: {
        required: true,
        error: false,
        errorText: "Passwords don't match"
    },
    
    street_address_1: {
        required: true,
        error: false,
        errorText: "Please enter your street address"
    },

    street_address_2: {
        required: false,
        error: false,
        errorText: ""
    },
    
    city: {
        required: true,
        error: false,
        errorText: "Please enter the city you reside in"
    },
    
    province: {
        required: true,
        error: false,
        errorText: "Please enter the state you reside in"
    },

    country: {
        required: true,
        error: false,
        errorText: "Please enter your country"
    },

    zip_code: {
        required: true,
        error: false,
        errorText: "Please enter your ZIP code"
    }
}

exports.options = {
    country: ['US', 'UK']
}