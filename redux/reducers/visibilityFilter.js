const visibilityFilter = ( state = 'SHOW_ALL', action = {type:''}) => {
    switch( action.type ) {
        case 'SET_VISIBILITY_FILTER': 
            return action.filter 
        defualt:
            return state
    }
    return null;
}

export default visibilityFilter;