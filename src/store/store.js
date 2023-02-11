import { createSlice, configureStore } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    experienceFormCount: [1],
    eduCationFormCount: [1],
    image: null
  },
  reducers: {
    addToExperience(state) {
      state.experienceFormCount.push(1);
    },
    addToEducation(state) {
      state.eduCationFormCount.push(1);
    },
    setImage(state,action){
      state.image = action.payload;
    }
  },
});

const persistedState = localStorage.getItem("resume")
  ? JSON.parse(localStorage.getItem("resume"))
  : { experienceFormCount: [1], eduCationFormCount: [1], image: null };

const store = configureStore({
  reducer: resumeSlice.reducer,
  preloadedState: { ...resumeSlice.initialState, ...persistedState },
  enhancers: [
    (createStore) => (reducer, preloadedState, enhancer) => {
      const store = createStore(reducer, preloadedState, enhancer);
      store.subscribe(() => {
        const state = store.getState();
        localStorage.setItem("resume", JSON.stringify(state));
      });
      return store;
    },
  ],
});

// console.log(store.getState());

export const resumeActions = resumeSlice.actions;

export default store;
