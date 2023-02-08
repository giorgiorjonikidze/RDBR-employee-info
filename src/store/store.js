import { createSlice, configureStore } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    image: null,
    name: null,
    email: null,
    phone_number: null,
    description: null,
    experiences: [],
    educations: [],
    about_me: null,
  },
  reducers: {
    updateData(state, action) {
      state.name = action.name;
      state.email = action.email;
      state.phone_number = action.phone_number;
      state.description = action.description;
      console.log(action.payload);
    },
    updateImage(state, action) {
      state.image = action.payload;
    //   console.log(action.payload);
    },
  },
});

const store = configureStore({
  reducer: resumeSlice.reducer,
});

export const resumeActions = resumeSlice.actions;

export default store;
