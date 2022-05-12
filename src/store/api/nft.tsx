import axios from "axios";
import { REQUEST_API_URL } from "../../config/constant";

export const getNfts = async (data: any) => {
  try {
    const response = await axios.get(`${REQUEST_API_URL}`, {
      params: data,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
