import * as A from '../action_types';

export const fetchModuleList = (familyName, searchQuery, pageNumber=0) => ({
  type: A.MODULES_FETCH_START,
  familyName,
  searchQuery,
  pageNumber,
});

export const finishModuleFetch = (result) => ({
  type: A.MODULES_FETCH_FINISHED,
  result,
});

export const updateSearchQuery = (newQuery) => ({
  type: A.MODULES_UPDATE_SEARCH_QUERY,
  newQuery,
});

export const updateFamilyFilter = (newFamilyName) => ({
  type: A.MODULES_UPDATE_FAMILY_FILTER,
  newFamilyName,
});

export const initModules = () => ({
  type: A.MODULES_INIT,
});

export const clearModules = () => ({
  type: A.MODULES_CLEAR,
});
