const buttonReducer = (state = "", action) => {

    switch(action.type) {
        case "show" :
            action.type = "hide"
            return "hide"

        case "hide" :
            action.type = "show"
            return "show"
        default :
        return "show"
    }

}

export default buttonReducer;