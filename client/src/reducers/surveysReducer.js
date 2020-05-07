const surveysReducer = (state = [], action) => {
    switch(action.type) {
        case "fetch_surveys":
            return action.payload
        default :
            return state
    }

}

export default surveysReducer;