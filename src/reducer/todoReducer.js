const initialState = {
    todo:[],
    count:0
}

const todoReducer = (state= initialState,action)=> {
    switch(action.type){
        case "inputData" : 
        return {
            ...state,
            todo:[...state.todo,action.payload]
        }
    }

}

export {todoReducer}