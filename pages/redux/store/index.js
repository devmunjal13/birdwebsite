
// import { createStore } from "redux";
// import rootReducer from "../reducer";

// let initialState = {};

// const store = createStore(rootReducer, initialState);
// export default store;




// import { createStore, applyMiddleware, compose } from "redux"
// import thunk from "redux-thunk"
// import { createWrapper } from "next-redux-wrapper"
// import rootReducer from "./reducers/rootReducer"

// const middleware = [thunk]

// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))

// export const wrapper = createWrapper(makeStore)







import { createStore } from "redux";
import rootReducer from "../reducer";


export const wrapper = createWrapper(makeStore)

const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
  preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().preferences;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;