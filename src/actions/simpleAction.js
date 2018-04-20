import * as types from '../actionTypes';

export function setDefaultFilter(filter) {
    console.log("Entered FIlter", filter);
    return {type: types.SET_DEFAULT_FILTER, filter};
}
export function getDefaultFilter(defaultFilter) {
    return {type: types.GET_DEFAULT_FILTER, defaultFilter: defaultFilter};
}
export function addSearchCriteria(searchCriteria) {
    return {type: types.ADD_SEARCH_CRITERIA, searchCriteria: searchCriteria};
}

export function SetFILTER(filter) {
    return {type: types.SET_FILTER, filter: filter};
}
export function GetFILTER() {
    return {type: types.GET_FILTER};
}
export function RemFILTER(filter) {
    return {type: types.REM_FILTER, filter: filter};
}