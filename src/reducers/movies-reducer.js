
// Actions 
/*
const action = {
    type : "MOVIES_LIST" ,
    payload : [
        {id : 0 , name : "pulp fiction"},
        {id : 1 , name : "Inception"}
    ]
};
*/
// Reducers

export default function( state = {} , action){
    switch(action.type) {
        case "MOVIES_LIST" :
            return {...state , movies:action.payload}
        case "DIR_LIST" :
            return {...state , directors:action.payload }
        default:
            return state;  
    }
}