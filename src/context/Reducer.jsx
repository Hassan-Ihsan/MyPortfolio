

const reducer = (state , action) => {

switch (action.type) {
    case "PURE-DATA":
        return {pure:action.payload};
    default:
        return state     
}
 
   
}

export default reducer
