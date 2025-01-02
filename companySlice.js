
import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',
  initialState: [],
  reducers: {
    addCompany: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCompany } = companySlice.actions;
export default companySlice.reducer;
