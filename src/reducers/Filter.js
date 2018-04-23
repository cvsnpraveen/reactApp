import {SET_DEFAULT_FILTER, ADD_SEARCH_CRITERIA, SET_FILTER, GET_FILTER, REM_FILTER} from '../actionTypes';

export default (state, action)=>{
    let newFilter={
        filters:[],
        defaultFilter:[],
        searchCriteria:[]
    };
    state = {
        filters:[],
        defaultFilter:[],
        searchCriteria:[]
    }
    console.log("state=>", state);
    console.log("action123=>", action);
    switch(action.type){
        case SET_DEFAULT_FILTER:
            newFilter.filters = action.filter.filterData;
            newFilter.defaultFilter = action.filter.defaultFilter;
            return newFilter;
        case SET_FILTER:
            newFilter = action.filter;
            console.log("reducer");
            return {AAAA:newFilter};
        case GET_FILTER:
            newFilter = action.filter;
            console.log("reducer");
            return {Filter:newFilter};
        case REM_FILTER:
            newFilter = action.filter;
            console.log("reducer");
            return {ABCD:newFilter};
        case ADD_SEARCH_CRITERIA:
            console.log("action.filter==>", action.filter);
            newFilter.searchCriteria.push(action.filter);
            return newFilter;
        default :
            return state;

    }
}