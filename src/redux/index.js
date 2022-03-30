const INITIAL_STATE = {
    userName: "",
    cardColor:"",
    types:[]
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
        case "GET_USERNAME":
            return {
                ...state,
                userName: action.payload
            }

        case "SET_BACKGROUND":
            return {
                ...state,
                cardColor: action.payload.background,
                types: action.payload.types
            }
            
        default:
            return state;
    }
}

export default reducer;