import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNfts } from "../api/nft";

export const getNftCollections = createAsyncThunk(
  "nfts/getNfts",
  async (params: any) => {
    try {
      const res = await getNfts({ asset_owner: params });
      return res;
    } catch (err: any) {}
  }
);
