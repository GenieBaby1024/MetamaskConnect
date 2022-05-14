import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNfts } from "../api/nft";

export const getNftCollections = createAsyncThunk(
  "nfts/getNfts",
  async (params: any) => {
    try {
      const res = await getNfts({ asset_owner: "0x74501b4130d1c3C7a82ccB57B67aF9F4c3279746" });
      return res;
    } catch (err: any) {}
  }
);
