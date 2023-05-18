import { createSlice } from '@reduxjs/toolkit';

interface IState {
  currentWidth: number
}

const initialState:IState = {
  currentWidth: 0,

};

const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    addWidth: (state, action) => {
      state.currentWidth = action.payload;
    },
  },
});

export const {addWidth} = styleSlice.actions;

export default styleSlice.reducer;
