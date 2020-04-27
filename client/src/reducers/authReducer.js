const authReducer = (state = null, action) => {
    console.log("in action",action)
    switch(action.type) {
        case "fetch_user":
            return action.payload || false
        default :
            return state
    }

}

export default authReducer;