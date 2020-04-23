const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case "Signin" :
            return !state

        default :
            return state
    }

}

export default loggedReducer;