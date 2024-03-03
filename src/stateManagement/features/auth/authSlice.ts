import {createSlice} from '@reduxjs/toolkit';
import {stateType} from '../../types/stateType';

const initialState: stateType['root']['auth'] = {
  freshInstall: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFreshInstall: (state, action) => {
      state.freshInstall = action.payload;
      return state;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {setFreshInstall} = authSlice.actions;
export const selectFreshInstall = (state: stateType) =>
  state.root.auth.freshInstall;
