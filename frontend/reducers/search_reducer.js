import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH } from '../actions/search_actions'

const searchReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.searchResults;
        case CLEAR_SEARCH:
            return [];
        default:
            return state;
    }
}   

export default searchReducer;
// we want to have this state as a key in our entities 
// -> entities reducer where we combine states that are values (nested pojos here as well )of the top 
// level entities key
