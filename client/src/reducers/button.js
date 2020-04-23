const buttonReducer = (state = "show", action) => {

    switch(action.type) {
        case "bSignin" :
            if(state === "show"){
            return "hide"}
            else {
                return "show"}

        default :
            return "show"
    }

}

export default buttonReducer;