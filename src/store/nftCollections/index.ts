import { createSlice } from "@reduxjs/toolkit";
import { getNftCollections } from "../nftCollections/actions";
import { nftcollections } from "./types";

const PREFIX = "nftcollections";
const initialState: nftcollections = {
  nftcollections: null,
};

const setNftCollections = (state: nftcollections, data: any) => {
  state.nftcollections = data;
};

export const nftcollectionsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNftCollections.fulfilled.type,
      (state: nftcollections, action: any) => {
        setNftCollections(state, action.payload);
      }
    );
  },
});

export { getNftCollections };
export default nftcollectionsReducer.reducer;
